
	// Pattern
	vec3 coords = normal;
	coords.y += uTime;
	
	vec3 noisyPattern = vec3(noise(coords));
	float pattern = wave(noisyPattern + uTime);
	// Varying
	vDisplacement = pattern;

	float displacement = vDisplacement / 3.0;

  transformed += normalize(objectNormal) * displacement;