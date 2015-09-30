var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<div className="job-details">
					<h1>Information Security Engineer</h1>
					<div className="job-info">
						<div className="employer">MaxPlay</div>
						<div className="location">Austin, TX</div>
					</div>
					<div className="tags">
						<a href="#" className="tag">angularjs</a>
						<a href="#" className="tag">d3.js</a>
						<a href="#" className="tag">javascript</a>
						<a href="#" className="tag">ui</a>
						<a href="#" className="tag">css</a>
					</div>
					<h2>Job description</h2>
					<p>MaxPlay is a high-energy, fast-growing startup based in Austin, Texas, helping companies ethically unlock the value hidden in their consumer data. We empower some of the coolest clients to build thriving, sustainable businesses with our leading-edge Digital Genome technology. With the MaxPlay platform, our clients can understand and build relationships with their customers in a way that has never before been possible.</p>

					<p>We are a team of agile, boundary-pushing problem-solvers who love to invent and improve. The Security Engineer will work closely with the development and operations teams to ensure the security and privacy of our systems and data. You'll audit and test our firewalls, APIs, code, databases, and protocols to make sure our security practices are beyond the state of the art. Tools like nmap, iptables, and tcpflow get you excited, and you aren't afraid of legal and compliance paperwork. The words "Heartbleed" and "Shellshock" are fresh in your memory. You'll participate in code reviews, weigh in on architectural design decisions, test for vulnerabilities, document processes, and assist with audits.</p>

					<p>What You Must Have:</p>

					<p>Cultural fit and eternal optimism. We are an ambitious startup setting out to lead a revolution. We fearlessly take big chances and know that optimism and perseverance are the keys to wild success — and we are tested on that daily. If this excites you, read on. If it makes you feel queasy, skip to the next company.</p>

					<p>Curiosity backed by execution. This is a tech startup, and you should be prepared to geek out on the intricacies of big data or the nuances of co-ownership of data rights. There’s a lot to learn and define, and you will naturally need to be obsessed with staying ahead of the curve. But it doesn’t stop there. You must leverage that learning and turn it into creating amazing experiences both inside and outside of MaxPlay.</p>

					<p>Motivation and determination. Exciting — and daunting — challenges face us every day at MaxPlay. We excel in the pursuit of challenging goals because we are intrinsically motivated to change the world and are determined to overcome any setbacks or obstacles on our way there. MaxPlay is looking for fighters, who go to bed and wake up each day with a fire in the belly.</p>
				</div>
				<div className="company-box">
					<a href="#" className="side-box">
						<h3>Company Information</h3>
						<img src="/images/featured.jpg" />
						<img src="/images/featured-logo.jpg" className="featured-logo" />
						<div className="company">
							<div className="name">MaxPlay</div>
							<div className="city">Austin, TX</div>
						</div>
					</a>
				</div>
			</section>
		);
	}
});