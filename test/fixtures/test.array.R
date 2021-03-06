options( digits = 16 );
library( jsonlite );


mu = -4
sigma = 8
probs = seq( 0, 1, 0.1 )
y = qnorm( probs, mu, sigma )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	sigma = sigma,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
