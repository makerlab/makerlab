
///
/// a logo widget with a colorful style
///

let logo = {
	kind:"logo",
	style:"multicolor center",
	content:"makerlab",
	link:"/"
}

///
/// a navigation widget that shows current focus
///

let navigation = {
	kind:"nav",
	children: [
		{ kind:'link', link:'/makerlab.com/projects', },
		{ kind:'link', link:'/makerlab.com/about', },
		{ kind:'link', link:'/makerlab.com/contact' },
	]
}

///
/// a switchable zone widget
///

let content = {
	kind:'routable',
	default:'/makerlab.com/projects',
	stylize: {
		display: 'flex',
		width: '100%',
		justifyContent:"center",
	}
}

///
/// footer
///

let footer = {
	kind:"footer",
	stylize: { padding: "5% 0 2% 0" },
	content:`This site runs on <a href="https://lifecards.org">lifecards</a>.
			Also visit <a href="https://twitter.com/makerlab">@makerlab</a>.
			Or why not peruse our <a href="https://blog.makerlab.com">blog</a>.`
}

///
/// Contact Page
///

let contact = {
	uuid:"/makerlab.com/contact",
	stylize:{display: 'flex'},
	children: [
		{
			kind:"logo",
			style:"multicolor small reflect pivot",
			content:"email:<br/>us@makerlab.com",
			link:"mailto:us@makerlab.com"
		},
	]
}


///
/// original about page from like 2011 or so ... decided to just leave it because it is cuteaf
///

let about = {
	uuid:"/makerlab.com/about",
	stylize:{ maxWidth:"800px" },
	markdown:`

### Who are we?

Makerlab is a full service interactive design build collective.

### Full Stack

We do product design of the user experience including paper prototypes, wireframes, interaction design, user research testing, usability, heuristic evaluation and ideation. Mobile, web and server side backend development Rapid Prototyping with small electronics, defining your BOM and your production from factory to customer.

### Open

We strongly believe in:

Open Data. Federate data, encourage practices which distribute data to the edges. Be transparent around data. Support open conversations, open API’s and open standards.

Open Code. Leverage open source wherever possible. Push software code liabilities out to a wide community of co-authors and supporters rather than carrying the burden of fixing all bugs and issues oneself. Contribute to open source projects, raise all boats and discourage competition over foundation technologies.

Open participation. Foster ecosystems where all participants can participate in a value chain; turn users into partners. Don’t force users to the edges where they can only be consumers. All work should allow users to not only create, but curate and help orchestrate. Think Wikipedia.

### Process focused

Brainstorming, sketching and iterative concept development are encouraged. Provide support for ideation, respect and foster creativity and risk taking by taking smaller steps more often. Playing games, making meals together, bringing people together from radically different disciplines, sharing our experiences and stories. The process of work is just as important as the outcome.

### Gray Area

Respect and understand the nuanced gray area between private and public. Take the time to allow people to be private. Always allow participants to participate anonymously if need be.

### Conversational

Encourage real time discourse, encourage collaboration and open-ended conversation. Be humane. Be multi-modal and multi-gateway, multi-ligual and multi-faceted.

### Velocity

Abide by agile development practices. Ship early and often. Be your own most loyal user. Provide feedback mechanisms early on, for team and stakeholders. Iterate quickly and often, take feedback and criticism and turn good projects into great ones.

### Community

Focus on caring for our own communities first, then and only then do you grow outwards from our own community. Remember to appreciate those around you, encourage and validate the work of those around you.
`
}


///
/// Projects Page
///

let projects = [

	{
		uuid:"/makerlab.com/projects",
		stylize: {
			display: 'flex',
			width: '100%',
			maxWidth:"1000px",
			justifyContent:"center",
			flexWrap:"wrap",
		},
		query:"*",
		queryrender:"card",
	},

	{
		uuid:"/makerlab.com/projects/whereis",
		content:"Disjecta Social Lifelines",
		link:"https://web.archive.org/web/20201101013353/http://makerlab.com",
		tags:"place, social"
	},

	{
		uuid:"/makerlab.com/projects/ImageWiki",
		content:"Augmented Reality Hyperlinks",
		tags:"image, pechakucha"
	},

	{
		uuid:"/makerlab.com/projects/Real Time Broker",
		content:"Real time place based brokerage",
		tags:"tool, place",
	},

	{
		uuid:"/makerlab.com/projects/wherecamp",
		content:"Know your place!",
		tags:"place, social",
		link:"https://wherecamp.org"
	},

	{
		uuid:"/makerlab.com/projects/Luminate",
		content:"Interactive Augmented Reality Drawing Program",
		tags:"drawing, ar"
	},

	{
		uuid:"/makerlab.com/projects/LightSuit",
		content:"Burning Man Wearable Art",
		tags:"play, hardware",
	},

	{
		uuid:"/makerlab.com/projects/Zero Theorem",
		content:"The Zero Theorem movie for Terry Gilliam",
		tags:"movie, tools"
	},

	{
		uuid:"/makerlab.com/projects/LifeCards",
		content:"Data driven Layout Engine",
		tags:"design, data"
	},

	{
		uuid:"/makerlab.com/projects/HumanScale",
		content:"Design thinking for human scale architecture",
		tags:"design, philosophy"
	},

	{
		uuid:"/makerlab.com/projects/Lemonopoly",
		content:"Place based Game and winner of the Zero1 Arts Grant",
		tags:"game, place, 🍋"
	},


	{
		uuid:"/makerlab.com/projects/Sugar",
		content:"Real time place based game",
		tags:"game, place",
	},

	{
		uuid:"/makerlab.com/projects/InsideMaps",
		content:"3d reconstruction of modern interiors",
		tags:"tool, 3d"
	},

	{
		uuid:"/makerlab.com/projects/Orbital",
		content:"Agent based cloud computation engine",
		tags:"tool, sim"
	},

	{
		uuid:"/makerlab.com/projects/Simulate World",
		content:"Simulating the world",
		tags:"philosophy"
	},

]

///
/// a site policy; sets up main css themes including light/dark
///

let sitelayout = {
	uuid: '/makerlab.com',
	kind: "site",
	tags: ["homepage"],
	children: [ logo, navigation, content, footer ]
}

///
/// data overall - making up the view and data
///

let data = [

	sitelayout,
	contact,
	about,
	...projects,

]

export default data;