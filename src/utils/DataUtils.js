let sample = {
  categories: [
    {
      _id: 'cat1',
      label: 'Food',
      icon: 'pizza-outline',
    },
    {
      _id: 'cat2',
      label: 'Clothes',
      icon: 'shirt-outline',
    },
    {
      _id: 'cat3',
      label: 'Travel',
      icon: 'airplane-outline',
    },
    {
      _id: 'cat4',
      label: 'Beauty',
      icon: 'skull-outline',
    },
    {
      _id: 'cat5',
      label: 'Gifts',
      icon: 'gift-outline',
    },
  ],
  vendors: [
    {
      _id: 'vendor1',
      name: 'Agarwal Sweets',
      coverImage: 'https://loremflickr.com/200/200/food?random=1',
      ratings: 4,
      reviews: 12,
      distance: 5,
    },
    {
      _id: 'vendor2',
      name: 'Tip Top Clothes',
      coverImage: 'https://loremflickr.com/200/200/cloth?random=1',
      ratings: 5,
      reviews: 64,
      distance: 10,
    },
    {
      _id: 'vendor3',
      name: 'Gayatri Gifts',
      coverImage: 'https://loremflickr.com/200/200/gift?random=1',
      ratings: 3,
      reviews: 6,
      distance: 2,
    },
    {
      _id: 'vendor4',
      name: 'City Parlor',
      coverImage: 'https://loremflickr.com/200/200/beauty?random=1',
      ratings: 4,
      reviews: 16,
      distance: 4,
    },
    {
      _id: 'vendor5',
      name: 'Hind Travels',
      coverImage: 'https://loremflickr.com/200/200/travel?random=1',
      ratings: 4,
      reviews: 8,
      distance: 16,
    },
    {
      _id: 'vendor6',
      name: 'Haldirams',
      coverImage: 'https://loremflickr.com/200/200/food?random=2',
      ratings: 5,
      reviews: 680,
      distance: 4,
    },
    {
      _id: 'vendor7',
      name: 'Rainbow Gift Gallery',
      coverImage: 'https://loremflickr.com/200/200/gift?random=2',
      ratings: 3,
      reviews: 9,
      distance: 1,
    },
    {
      _id: 'vendor8',
      name: 'Wanderers',
      coverImage: 'https://loremflickr.com/200/200/travel?random=2',
      ratings: 5,
      reviews: 67,
      distance: 12,
    },
    {
      _id: 'vendor9',
      name: 'Swag Fashion',
      coverImage: 'https://loremflickr.com/200/200/cloth?random=2',
      ratings: 5,
      reviews: 22,
      distance: 7,
    },
    {
      _id: 'vendor10',
      name: 'Pizza Point',
      coverImage: 'https://loremflickr.com/200/200/food?random=3',
      ratings: 3,
      reviews: 17,
      distance: 2,
    },
    {
      _id: 'vendor11',
      name: 'Eternals',
      coverImage: 'https://loremflickr.com/200/200/beauty?random=2',
      ratings: 5,
      reviews: 83,
      distance: 5,
    },
    {
      _id: 'vendor12',
      name: 'Manyavar',
      coverImage: 'https://loremflickr.com/200/200/cloth?random=3',
      ratings: 5,
      reviews: 320,
      distance: 3,
    },
    {
      _id: 'vendor13',
      name: 'Desi Cuisine',
      coverImage: 'https://loremflickr.com/200/200/food?random=4',
      ratings: 5,
      reviews: 107,
      distance: 10,
    },
  ],
  products: [
    {
      _id: 'product1',
      name: 'Jeans',
      image: 'https://loremflickr.com/200/200/cloth?random=4',
      price: 20,
      categoryId: 'cat2',
      vendorId: 'vendor2',
    },
    {
      _id: 'product2',
      name: 'Choco Cake',
      image: 'https://loremflickr.com/200/200/food?random=5',
      price: 6,
      categoryId: 'cat1',
      vendorId: 'vendor1',
    },
    {
      _id: 'product3',
      name: 'Qraa FaceWash',
      image: 'https://loremflickr.com/200/200/beauty?random=3',
      price: 5,
      categoryId: 'cat4',
      vendorId: 'vendor4',
    },
    {
      _id: 'product4',
      name: 'Bali Trip',
      image: 'https://loremflickr.com/200/200/travel?random=3',
      price: 500,
      categoryId: 'cat5',
      vendorId: 'vendor5',
    },
    {
      _id: 'product5',
      name: 'Car',
      image: 'https://loremflickr.com/200/200/car?random=1',
      price: 10,
      categoryId: 'cat3',
      vendorId: 'vendor3',
    },
    {
      _id: 'product6',
      name: 'Goa Trip',
      image: 'https://loremflickr.com/200/200/travel?random=4',
      price: 300,
      categoryId: 'cat5',
      vendorId: 'vendor8',
    },
    {
      _id: 'product7',
      name: 'Gulab Jamun',
      image: 'https://loremflickr.com/200/200/food?random=6',
      price: 3,
      categoryId: 'cat1',
      vendorId: 'vendor6',
    },
    {
      _id: 'product8',
      name: 'Suit',
      image: 'https://loremflickr.com/200/200/cloth?random=5',
      price: 20,
      categoryId: 'cat2',
      vendorId: 'vendor12',
    },
    {
      _id: 'product9',
      name: 'Hair Color',
      image: 'https://loremflickr.com/200/200/beauty?random=4',
      price: 2,
      categoryId: 'cat4',
      vendorId: 'vendor11',
    },
    {
      _id: 'product10',
      name: 'Toys',
      image: 'https://loremflickr.com/200/200/toy?random=1',
      price: 10,
      categoryId: 'cat5',
      vendorId: 'vendor7',
    },
    {
      _id: 'product11',
      name: 'Biryani',
      image: 'https://loremflickr.com/200/200/food?random=7',
      price: 5,
      categoryId: 'cat1',
      vendorId: 'vendor13',
    },
    {
      _id: 'product12',
      name: 'Shirt',
      image: 'https://loremflickr.com/200/200/cloth?random=6',
      price: 10,
      categoryId: 'cat2',
      vendorId: 'vendor9',
    },
    {
      _id: 'product13',
      name: 'Burger',
      image: 'https://loremflickr.com/200/200/food?random=8',
      price: 2,
      categoryId: 'cat1',
      vendorId: 'vendor10',
    },
    {
      _id: 'product14',
      name: 'T-Shirt',
      image: 'https://loremflickr.com/200/200/cloth?random=7',
      price: 5,
      categoryId: 'cat2',
      vendorId: 'vendor9',
    },
  ],
};

export const getHighlights = () => {
  return sample.products;
};

export const getCategories = () => {
  return sample.categories;
};

export const getVendors = () => {
  return sample.vendors;
};

export const searchVendorsByName = (allVendors, searchText) => {
  if (searchText) {
    searchText = searchText.toLowerCase();
    return allVendors.filter((vendor) => {
      let vendorName = vendor.name.toLowerCase();
      return vendorName.indexOf(searchText) !== -1;
    });
  }
  return allVendors;
};

export const searchVendorsWithinDistance = (allVendors, distance) => {
  distance = isNaN(distance) ? 0 : distance;
  return allVendors.filter((vendor) => {
    let vendorDistance = vendor.distance;
    return vendorDistance <= distance;
  });
};
