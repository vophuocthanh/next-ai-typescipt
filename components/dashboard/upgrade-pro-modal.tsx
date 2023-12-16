'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SubcriptionButton from '../subscription-button';
import { useProStore } from '@/stores/pro-store';

interface UpgradeProModalProps {
  isProPlan?: boolean;
}

const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = useProStore();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent onClose={handleCloseProModal} showOverlay>
        <SubcriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeProModal;
