// function search( 
// 	query: string, 
// 	tags?: string[]
// ): Promise<Result[]> {
// 	let queryString = `?query=${query}` 
// 	if(tags && tags.length) {
// 		queryString += `&tags=${tags.join()}` 
// 	}
// 	return fetch(`/search${queryString}`) 
// 		.then(response => response.json())
// 	}

// type SearchFn = typeof search

// search()

type Query = {
	query: string,
	tags?: string[],
	assemble: (includeTags: boolean) => string
}

const query: Query = {
	query: 'Ember',
	tags: ['javascript'],
	assemble(includeTags = false) {
		let query = `?query=${this.query}`
		if(includeTags && typeof this.tags !== 'undefined') {
			query += `&${this.tags.join(',')}`
		}
		return query
	}
}

type AssembleFn = (includeTags: boolean) => string 
type Query = {
	query: string, 
	tags?: string[], 
	assemble: AssembleFn
}