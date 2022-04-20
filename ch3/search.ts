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
declare function search( 
	query: string,
	tags: string[]
): Result[]

// OPTIONAL PARAMETERS

search('Ember', ['Javascript']) // works
search('Ember') // errors - tags are missing
search('Ember', []) // nasty workaround