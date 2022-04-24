// TYPING FUNCTION HEADS

// A helper type with the results we expect 
// from calling the back end

type Result = {
	title: string, 
	url: string, 
	abstract: string
}

/**
* The search function takes a query it sends 
* to the back end, as well as a couple of tags 
* as a string array, to get filtered results 
*/

// declare function search( 
// 	query: string,
// 	tags?: string[]
// ): Result[]

// OPTIONAL PARAMETERS

// search('Ember', ['Javascript']) // works
// search('Ember') // errors - tags are missing
// search('Ember', []) // nasty workaround


function search(query: string, tags?: string[]) { 
	// Based on our input parameters, we build a query 
	// string
	let queryString = `?query=${query}`
	
	// tags can be undefined as it's optional. 
	// let's check if they exist
	if(tags && tags.length) {
		// and add all tags in that array to the 
		// query string
		queryString += `&tags=${tags.join()}`
	}
	
	// Ready? Fetch from our search API
	return fetch(`/search${queryString}`)
	// When we get a response, we call the 
	// .json method to get the actual results 
	.then(response => response.json())
}

search('Ember') // Yes!
search('Ember', ['JavaScript']) // Also yes! 
search('Ember', ['JavaScript', 'CSS']) // Yes yes!
