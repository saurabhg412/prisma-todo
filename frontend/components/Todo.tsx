
interface TodoProps {
  todos: { title: string, description: string, done: boolean }[];
}

export function Todo({ todos = [] }: TodoProps) {
  return (
    <div>
      {todos.map(({ title, description, done }) => (
        <div>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <input type="checkbox" checked={done} />
        </div>
      ))}
    </div>
  )
}