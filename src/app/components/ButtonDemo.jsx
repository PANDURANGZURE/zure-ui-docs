import { Button } from 'your-ui-library';

export default function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
