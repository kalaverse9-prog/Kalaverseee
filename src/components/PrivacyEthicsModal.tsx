import React from 'react';
import { Shield, Lock, Trash2, CheckCircle2, X } from 'lucide-react';
import { SupportedLanguage, getTranslations } from '../data/translations';

interface PrivacyEthicsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetData: () => void;
  language?: SupportedLanguage;
}

export const PrivacyEthicsModal: React.FC<PrivacyEthicsModalProps> = ({
  isOpen,
  onClose,
  onResetData,
  language = 'en'
}) => {
  if (!isOpen) return null;
  const isHi = language === 'hi';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border-2 border-[#1E3A8A]/20 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#10B981]" />
            <h3 className="text-xl font-display font-bold text-[#1E3A8A]">
              {isHi ? 'गोपनीयता, नैतिकता और डेटा संप्रभुता' : 'Privacy, Ethics & Data Sovereignty'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#2D2D2D]/85 leading-relaxed">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
            <h4 className="font-bold text-emerald-900 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-700" /> {isHi ? 'शून्य डेटा बिक्री गारंटी' : 'Zero Data Selling Guarantee'}
            </h4>
            <p className="text-emerald-800 text-xs">
              {isHi 
                ? 'कलावेर्स आपकी कलाकृतियों, चित्र अभ्यास या व्यक्तिगत डेटा को तीसरे पक्ष के विज्ञापन नेटवर्क या अनधिकृत AI प्रशिक्षण सामग्री को कभी नहीं बेचता है।'
                : 'KalaVerse never sells your artwork, drawing practice, or personal data to third-party ad networks or unauthorized AI training corpuses.'}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#1E3A8A]">{isHi ? 'निष्पक्ष कारीगर व्यापार संहिता:' : 'Fair Artisan Trade Code:'}</h4>
            <p>
              {isHi
                ? 'सभी बाज़ार बिक्री और कार्यशाला पंजीकरण सत्यापित कारीगर बैंक खातों में सीधे 85% भुगतान मॉडल और पारदर्शी 15% मंच कमीशन का कड़ाई से पालन करते हैं, जिससे बिचौलियों का शोषण रुकता है।'
                : 'All marketplace sales and workshop registrations enforce a strict 85% direct payout model directly into verified artisan bank accounts with a transparent 15% platform commission, preventing predatory middlemen exploitation.'}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#1E3A8A]">{isHi ? 'सकारात्मक वातावरण का संकल्प:' : 'Positive Space Mandate:'}</h4>
            <p>
              {isHi
                ? 'सामुदायिक संवाद पूर्णतः सकारात्मक है। हमारा मंच नए और उस्ताद कलाकारों दोनों की सुरक्षा के लिए केवल सराहना और रचनात्मक एआई मार्गदर्शन का समर्थन करता है।'
                : 'Community interactions are strictly positive. Our system enforces like-only appreciation and constructive AI mentorship to protect budding and master artists alike.'}
            </p>
          </div>
        </div>

        {/* Data Reset Button */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              if (window.confirm(isHi ? 'क्या आप वाकई अपना स्थानीय सत्र डेटा, कार्ट और प्रगति साफ़ करना चाहते हैं?' : 'Are you sure you want to clear your local session data, cart, and progress?')) {
                onResetData();
                onClose();
              }
            }}
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isHi ? 'स्थानीय सत्र व प्रगति रीसेट करें' : 'Reset Local Session & Progress'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1E3A8A] text-[#FFF8E7] font-bold text-xs shadow hover:bg-[#1E3A8A]/90 transition-colors"
          >
            {isHi ? 'समझ गया / स्वीकार है' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
};
