
 // Get stored favorites from localStorage
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

// Save favorites array to localStorage
function saveFavorites(favoritesArray) {
    localStorage.setItem(
        'bookExplorerFavorites',
        JSON.stringify(favoritesArray)
    );
}

// Add a book to favorites
export function addFavorite(book) {
    const favorites = getFavorites();
    const isAlreadySaved = favorites.some(
        favorite => favorite.key === book.key
    );

    if (!isAlreadySaved) {
        favorites.push(book);
        saveFavorites(favorites);
    }
}

// Remove a book from favorites
export function removeFavorite(bookKey) {
    const favorites = getFavorites().filter(
        book => book.key !== bookKey
    );

    saveFavorites(favorites);
}
