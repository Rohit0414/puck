import Editor from '@measured/puck';
import components from '../../config/components';

// Cast Editor to a React component type
const EditorComponent = Editor as unknown as React.FC<{ components: any }>;

export default function EditPage() {
    console.log('Components registry:', components); // Debug line
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Puck Editor</h1>
      <EditorComponent components={components} />
    </div>
  );
}
