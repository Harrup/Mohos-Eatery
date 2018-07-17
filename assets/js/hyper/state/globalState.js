var companyInfo = {
  name: 'Mohos Eatery',
  phoneNumber:'613-432-4576',

}

var specialMenu = [
  {
    title:'Super BBQ Grill No Smoke',
    description:'Fried eggs, Fried bacon, toast, frsh tomato, salad, cup of coffee or tea',
    price: 25,
    image:"https://images.unsplash.com/photo-1524182576066-1bb979e25342?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdd66ce8c595d2f8883284a6b47b1506&auto=format&fit=crop&w=1650&q=80"
  },
  {
    title:'Queen of Autumn',
    description:'Warm chicken wings, portobello mushrooms, fresh mozzarella, coffee or tea',
    price: 28,
    image:"https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1449335934000/photosp/fef83fa2-91db-4c0d-8e0c-f15695455b4b/stock-photo-food-burger-mushroom-spinach-vegetarian-vegan-scrambled-eggs-portobello-fef83fa2-91db-4c0d-8e0c-f15695455b4b.jpg"
  },
  {
    title:'All American Burger',
    description:'Burger with green leafy vegetables, cheese and fries',
    price: 23,
    image:"https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
]

var reviews = [
  {
    company:'The Food Network',
    author:'Joe Bastianich',
    authorInfo:'winner master chef 2016',
    highlight:'Best restaurant that I experienced!',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    company:'HBO',
    author:'Jack Nellee',
    authorInfo:'Worlds 50 resteraunt owner',
    highlight:'Top notch food and service!',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    company:'Cooking Channel',
    author:'Katie Johnson',
    authorInfo:'Host of Beach Bites and fishing',
    highlight:'Excellent fresh sea food!',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    company:'The Food Network',
    author:'Jeremy Lee',
    authorInfo:'Host of man and food',
    highlight:'Would highly recommend',
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

var randomQuote = [
  {
    author:'Mallon',
    quote:'A Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.'
  },
  {
    author:'Rohny Mclawry',
    quote:'Let food be thy medicine and medicine be thy food'
  },
  {
    author:'Hariett Van Horne',
    quote:'cooking is like love, it should be entered into with abandon ar not at all'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenu,
  reviews,
  randomQuote,
  reviewStatus: {
    currentReview:0
  }
}
