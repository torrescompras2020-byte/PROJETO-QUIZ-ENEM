import { Question, SubjectId } from '../types/quiz';

// Porta padrão do servidor Laravel (onde o seu colega vai rodar 'php artisan serve')
const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchQuestoesDoBackend(materiaId?: SubjectId): Promise<Question[]> {
  try {
    const params = new URLSearchParams();
    if (materiaId) {
      params.append('materia_id', materiaId);
    }

    // Faz a chamada à rota do Laravel que vimos no GitHub dele
    const response = await fetch(`${API_BASE_URL}/questoes?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const json = await response.json();
    const questoesLaravel = json.dados?.data || [];

    // Mapeamento: converte os nomes do banco do Laravel para os nomes que a nossa tela usa
    return questoesLaravel.map((q: any) => ({
      id: String(q.id),
      subjectId: q.materia?.slug || materiaId || 'linguagens',
      subjectName: q.materia?.nome || 'ENEM',
      topic: q.assunto?.nome || 'Geral',
      enemYear: q.ano,
      contextText: q.texto_suporte || q.contexto,
      questionText: q.enunciado || q.texto,
      options: (q.alternativas || []).map((alt: any) => ({
        id: alt.letra || alt.ordem,
        text: alt.texto || alt.descricao
      })),
      correctOptionId: q.alternativas?.find((a: any) => a.correta || a.is_correct)?.letra || 'A',
      explanation: q.explicacao || q.resolucao || 'Gabarito oficial do exame.',
      difficulty: q.dificuldade || 'Médio'
    }));
  } catch (error) {
    // Se o backend dele estiver desligado, ele avisa no console e usa o banco local de reserva
    console.warn('Backend Laravel offline ou inacessível. Usando banco de dados local de reserva.', error);
    return [];
  }
}
