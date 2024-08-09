import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="">About</a>
        <a href="">Gameplay</a>
        <a href="">Asset Gallery</a>
        <a href="">Story</a>
        <a href="">Testimonials</a>

        <Button>Admin</Button>
        <Button>Sign in</Button>
      </nav>
    </header>
  );
};
