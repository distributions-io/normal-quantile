options( digits = 16 );
library( jsonlite );

mu = 3
sigma = 7
probs = seq( 0, 1, length.out = 25 )
y = qnorm( probs, mu, sigma )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	sigma = sigma,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
