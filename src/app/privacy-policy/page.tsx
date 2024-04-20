import { Paragraph } from '@/components';
import PRIVAICY_POLICY from '@/contants/privacy-policy.json';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col grow px-5 py-10 sm:p-10 gap-6">
      <span className="text-xl sm:text-2xl font-bold text-center">개인정보 처리방침</span>

      {PRIVAICY_POLICY.map((paragraph: { title: string; content: string }) => (
        <Paragraph key={paragraph.title} title={paragraph.title} content={paragraph.content} />
      ))}
    </div>
  );
}
