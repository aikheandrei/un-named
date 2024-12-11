interface BackdropProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 z-10 grid h-full w-full items-center justify-center bg-primary/5 backdrop-blur"
    >
      {children}
    </div>
  );
};

export default Backdrop;
