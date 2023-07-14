export default defineEventHandler( async ( event ) => {
	return event.node.req.headers;
} );
