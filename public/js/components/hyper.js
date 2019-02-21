webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rightReviewClicked = function rightReviewClicked(state, actions) {
  return state.globalState.reviewStatus.currentReview = state.globalState.reviewStatus.currentReview + 1;
};

var leftReviewClicked = function leftReviewClicked(state, actions) {
  return state.globalState.reviewStatus.currentReview = state.globalState.reviewStatus.currentReview - 1;
};

var actions = exports.actions = {
  rightReviewClicked: rightReviewClicked,
  leftReviewClicked: leftReviewClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _header = __webpack_require__(11);

var _header2 = _interopRequireDefault(_header);

var _TopImg = __webpack_require__(10);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(6);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(9);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(7);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(8);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  name: 'Mohos Eatery',
  phoneNumber: '613-432-4576'

};

var specialMenu = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, Fried bacon, toast, frsh tomato, salad, cup of coffee or tea',
  price: 25,
  image: "https://images.unsplash.com/photo-1524182576066-1bb979e25342?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdd66ce8c595d2f8883284a6b47b1506&auto=format&fit=crop&w=1650&q=80"
}, {
  title: 'Queen of Autumn',
  description: 'Warm chicken wings, portobello mushrooms, fresh mozzarella, coffee or tea',
  price: 28,
  image: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1449335934000/photosp/fef83fa2-91db-4c0d-8e0c-f15695455b4b/stock-photo-food-burger-mushroom-spinach-vegetarian-vegan-scrambled-eggs-portobello-fef83fa2-91db-4c0d-8e0c-f15695455b4b.jpg"
}, {
  title: 'All American Burger',
  description: 'Burger with green leafy vegetables, cheese and fries',
  price: 23,
  image: "https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}];

var reviews = [{
  company: 'The Food Network',
  author: 'Joe Bastianich',
  authorInfo: 'winner master chef 2016',
  highlight: 'Best restaurant that I experienced!',
  review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}, {
  company: 'HBO',
  author: 'Jack Nellee',
  authorInfo: 'Worlds 50 resteraunt owner',
  highlight: 'Top notch food and service!',
  review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}, {
  company: 'Cooking Channel',
  author: 'Katie Johnson',
  authorInfo: 'Host of Beach Bites and fishing',
  highlight: 'Excellent fresh sea food!',
  review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}, {
  company: 'The Food Network',
  author: 'Jeremy Lee',
  authorInfo: 'Host of man and food',
  highlight: 'Would highly recommend',
  review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}];

var randomQuote = [{
  author: 'Mallon',
  quote: 'A Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.'
}, {
  author: 'Rohny Mclawry',
  quote: 'Let food be thy medicine and medicine be thy food'
}, {
  author: 'Hariett Van Horne',
  quote: 'cooking is like love, it should be entered into with abandon ar not at all'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenu: specialMenu,
  reviews: reviews,
  randomQuote: randomQuote,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "contact-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        { "class": "title" },
        "We are always ready to help"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6 address" },
            (0, _hyperapp.h)(
              "div",
              { "class": "city" },
              "Ottawa, ",
              (0, _hyperapp.h)(
                "span",
                null,
                "Ontario"
              )
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "3000 Dalhousie Street ",
              (0, _hyperapp.h)("br", null),
              " K1N 8X2 ",
              (0, _hyperapp.h)("br", null),
              "Ottawa, Ontario"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@mohoseatery.com" },
                "info@mohoseatery.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6 contact" },
            (0, _hyperapp.h)(
              "h5",
              { "class": "call" },
              "Call directly:"
            ),
            (0, _hyperapp.h)(
              "h1",
              null,
              state.globalState.companyInfo.phoneNumber
            ),
            (0, _hyperapp.h)(
              "h5",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday and Sunday Bookings:",
              (0, _hyperapp.h)("br", null),
              "From 12pm to 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h5",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily Bookings: From 12pm to 1:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "links" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "icons" },
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.twitter.com" },
          (0, _hyperapp.h)("i", { "class": "fa fa-twitter" })
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.facebook.com" },
          (0, _hyperapp.h)("i", { "class": "fa fa-facebook" })
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://www.instagram.com" },
          (0, _hyperapp.h)("i", { "class": "fa fa-instagram" })
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "https://plus.google.com" },
          (0, _hyperapp.h)("i", { "class": "fa fa-google-plus" })
        )
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        " \xA9 Moho's Eatery 2019"
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        "Built By Harrup. All rights reserved"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6 quote-info" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "quote-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking Is The Art Of ",
            (0, _hyperapp.h)("br", null),
            "Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Moses Eggsy"
            ),
            " - ",
            (0, _hyperapp.h)(
              "em",
              null,
              "Master chef at Moho's Eatery"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote", style: {
        backgroundImage: "url(\"/img/randomquote.jpg\")"
      } },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"A Good painting is like good cooking; it can be tasted, but not explained.\""
      ),
      (0, _hyperapp.h)(
        "span",
        null,
        " - Mallon - "
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var rightClick = function rightClick() {
    if (state.globalState.reviewStatus.currentReview == state.globalState.reviews.length - 1) {
      console.log("nothing to do");
    } else {
      actions.rightReviewClicked();
    }
  };

  var leftClick = function leftClick() {
    if (state.globalState.reviewStatus.currentReview == 0) {
      console.log("nothing to do");
    } else {
      actions.leftReviewClicked();
    }
  };

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h2",
        { "class": "title" },
        state.globalState.reviews[state.globalState.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h5",
        null,
        "\"",
        state.globalState.reviews[state.globalState.reviewStatus.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.globalState.reviews[state.globalState.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "quote" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.globalState.reviews[state.globalState.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.globalState.reviews[state.globalState.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "img" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6 review-info" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "review-title" },
            "Review"
          ),
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClick, "class": "fa fa-arrow-left " + (state.globalState.reviewStatus.currentReview == 0 ? '' : 'ready') }),
            (0, _hyperapp.h)("i", { onclick: rightClick, "class": "fa fa-arrow-right " + (state.globalState.reviewStatus.currentReview == state.globalState.reviews.length - 1 ? '' : 'ready') })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.globalState.specialMenu.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "img", style: {
                background: "url(\"" + item.image + "\") no-repeat center center", backgroundSize: 'cover'
              } },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "details" },
            (0, _hyperapp.h)(
              "h5",
              null,
              item.title
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              item.description
            )
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "special-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavour Of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "full-menu" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "Moho's  ",
          (0, _hyperapp.h)("br", null),
          "Eatery"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book table directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            state.globalState.companyInfo.phoneNumber
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Mon - Fri:"
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend:"
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    { "class": "header" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "MOHOS"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platter"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    }
  }
});

/***/ })
],[12]);