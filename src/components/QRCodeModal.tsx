import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Smartphone, QrCode as QrIcon } from 'lucide-react';
interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = window.location.href;
      setCurrentUrl(url);

      QRCode.toDataURL(url, {
        width: 280,
        margin: 2,
        color: {
          dark: '#1e1b4b',
          light: '#ffffff'
        }
      })
        .then((dataUrl) => {
          setQrDataUrl(dataUrl);
        })
        .catch((err) => {
          console.error('Erro ao gerar QR code:', err);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1 text-center">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2">
            <QrIcon className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Acesso Mobile via QR Code
          </h2>
          <p className="text-xs text-slate-500">
            Aponte a câmera do celular para abrir o quiz instantaneamente
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col items-center justify-center">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="QR Code para acesso mobile ao Quiz ENEM"
              className="w-56 h-56 rounded-lg bg-white p-2 shadow-xs"
            />
          ) : (
            <div className="w-56 h-56 flex items-center justify-center text-xs text-slate-400">
              Gerando QR Code...
            </div>
          )}
          <span className="text-[11px] text-slate-500 mt-2 font-mono break-all text-center max-w-xs">
            {currentUrl}
          </span>
        </div>

        <div className="space-y-2 text-xs text-slate-600 bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100">
          <div className="font-semibold text-indigo-900 flex items-center gap-1.5">
            <Smartphone className="w-4 h-4 text-indigo-600" />
            <span>Como usar na apresentação ou na sala de aula:</span>
          </div>
          <ol className="list-decimal pl-4 space-y-1 leading-relaxed text-indigo-950">
            <li>Abra a câmera padrão do seu smartphone Android ou iOS.</li>
            <li>Enquadre o código acima até surgir a notificação do link.</li>
            <li>Toque para abrir e praticar o quiz no celular sem instalar nada.</li>
          </ol>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCopyLink}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Link Copiado com Sucesso!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Copiar Link Direto</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
