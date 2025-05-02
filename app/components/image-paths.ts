// Sample image paths for the marketplace
export const scooterImages = {
  vespaVintage: "/scooters/vespa-vintage.png",
  lambrettaV200: "/scooters/lambretta-v200.png",
  hondaRuckus: "/scooters/honda-ruckus.png",
  genuineBuddy: "/scooters/genuine-buddy.png",
  vespaGts300: "/scooters/vespa-gts300.png",
  lambrettaGp200: "/scooters/lambretta-gp200.png",
  placeholder: "/placeholder.svg",
}

// Function to get a placeholder with dimensions
export function getPlaceholder(width: number, height: number): string {
  return `/placeholder.svg?height=${height}&width=${width}`
}
