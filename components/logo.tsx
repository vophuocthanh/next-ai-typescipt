import { cn } from '@/lib/utils';
import { BrainCircuit } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
});

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <BrainCircuit color='#0ea5e9' size={40}></BrainCircuit>
      <span className={cn('ml-2 font-bold text-3xl', poppins.className)}>
        Brainfast
      </span>
    </div>
  );
};

export default Logo;
