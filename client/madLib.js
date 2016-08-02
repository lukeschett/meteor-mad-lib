Template.body.events({
	'submit #madLibForm'(event) {
		event.preventDefault();
		let exclamation = event.target.exclamation.value;
    let adverb = event.target.adverb.value;
    let noun = event.target.noun.value;
    let verb = event.target.verb.value;
    console.log("'" + exclamation + "!' you say, as you " + adverb + " jump onto your " + noun + " and " + verb + " into the sunset.");
  }
});
