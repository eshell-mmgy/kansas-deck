interface MmgyLogoProps {
  className?: string
  color?: 'white' | 'red' | 'black'
}

export function MmgyLogo({ className = '' }: MmgyLogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="MMGY Global"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
