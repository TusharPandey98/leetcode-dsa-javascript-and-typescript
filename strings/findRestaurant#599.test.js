import findRestaurant from "./findRestaurant#599";

describe('findRestaurant', () => {
    it('should return ["Shogun"] for two example lists', () => {
        const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
        const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
        const commonRestaurants = findRestaurant(list1, list2);
        expect(commonRestaurants).toEqual(["Shogun"]);
    });

    it('should return ["KFC", "Burger King", "Tapioca Express", "Shogun"] for two reversed lists', () => {
        const list1 = ["KFC", "Burger King", "Tapioca Express", "Shogun"];
        const list2 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
        const commonRestaurants = findRestaurant(list1, list2);
        expect(commonRestaurants).toEqual([ 'Shogun', 'Tapioca Express', 'Burger King', 'KFC' ]);
    });

    it('should return [] for lists with no common restaurants', () => {
        const list1 = ["McDonald's", "Pizza Hut", "Subway"];
        const list2 = ["Burger King", "Taco Bell"];
        const commonRestaurants = findRestaurant(list1, list2);
        expect(commonRestaurants).toEqual([]);
    });

    it('should handle lists with different lengths', () => {
        const list1 = ["Shogun", "Tapioca Express"];
        const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
        const commonRestaurants = findRestaurant(list1, list2);
        expect(commonRestaurants).toEqual(["Shogun"]);
    });

    it('should handle empty lists', () => {
        const list1 = [];
        const list2 = ["Shogun", "Tapioca Express"];
        const commonRestaurants = findRestaurant(list1, list2);
        expect(commonRestaurants).toEqual([]);
    });
});
