type tokensGridProps = {
  tokens: Record<string, string>
}

export const TokensGrid = ({ tokens }: tokensGridProps) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <td style={{ fontWeight: 'bold' }}>Name</td>
          <td style={{ fontWeight: 'bold' }}>Value</td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
