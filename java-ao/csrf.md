
```java
@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
//				.csrf().disable()

				.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class)
				.exceptionHandling()
				.authenticationEntryPoint(authenticationEntryPoint())
				.accessDeniedHandler(accessDeniedHandler())

				.and()
				.formLogin().disable()

				.headers()
				.frameOptions()
				.sameOrigin()

				.and()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)

				.and()
				.authorizeRequests()
					.antMatchers(whitelistProperty.getWhitelist()).permitAll()
				.anyRequest()
					.hasAuthority(OA_AUTHORITY)
				;

       http.csrf().csrfTokenRepository(csrfTokenRepository());
}
	public CsrfTokenRepository csrfTokenRepository() {
		CookieCsrfTokenRepository csrfTokenRepository = new CookieCsrfTokenRepository();
		csrfTokenRepository.setCookieHttpOnly(false);
		csrfTokenRepository.setParameterName("X-CSRF-TOKEN");
		return csrfTokenRepository;
	}
}
```