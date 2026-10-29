export function getFavorites() {
    try {
        const storedFavorites = localStorage.getItem(
            'bookExplorerFavorites'
        );

        const favorites = storedFavorites
            ? JSON.parse(storedFavorites)
            : [];

        return Array.isArray(favorites) ? favorites : [];
    } catch (error) {
        console.error('Could not load favorites:', error);
        return [];
    }
}