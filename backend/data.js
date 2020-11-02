import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Cameron",
			email: "admin@example.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: true
		},
		{
			name: "Sean",
			email: "sample@example.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false
		}
	],
	products: [
		{
			name: "Lightning Dragon",
			category: "Dragons",
			image: "/images/d1.jpg",
			price: 125,
			countInStock: 6,
			brand: "Mjolnir inc",
			rating: 4.6,
			numReviews: 27,
			description:
				"It is said that on an ancient Dragon Island during a brutal thunderstorm, a bolt of lightning struck a Nest and all the eggs begin to glow with an intense energy. This was how the first Lighting Dragons were created. These power filled dragons are excitable, seem to have endless energy.  They are great additions to any person needing a good alarm clock, or to someone needing something to 'Spark' up there day."
		},
		{
			name: "Scaleless Dragon",
			category: "Dragons",
			image: "/images/d5.jpg",
			price: 580,
			countInStock: 2,
			brand: "Mjolnir inc",
			rating: 4.0,
			numReviews: 2,
			description: "Scaleless Dragon Egg"
		},
		{
			name: "Night Wyvern",
			category: "Wyverns",
			image: "/images/w1.jpg",
			price: 200,
			countInStock: 10,
			brand: "Egg emporium",
			rating: 3.9,
			numReviews: 10,
			description: "Night Wyvern"
		},
		{
			name: "Volcanic Dragon",
			category: "Dragons",
			image: "/images/d2.jpg",
			price: 550,
			countInStock: 6,
			brand: "Maunaloa Eggs",
			rating: 4.0,
			numReviews: 31,
			description: ""
		},
		{
			name: "Venomtail Dragon",
			category: "Dragons",
			image: "/images/d3.jpg",
			price: 135,
			countInStock: 3,
			brand: "Mjolnir inc",
			rating: 3.6,
			numReviews: 5,
			description: "Volcanic Dragon"
		},
		{
			name: "Serpent Leviathan",
			category: "Serpents",
			image: "/images/d4.jpg",
			price: 210,
			countInStock: 0,
			brand: "Atlantean imports",
			rating: 4.2,
			numReviews: 15,
			description: "Serpent Leviathan"
		}
	]
};
export default data;
