#### Markov Decision Process
A Markov Decision Process  **(MDP)** is a discrete time stochastic control process. At each time step, the process is in some state *s*,
 and the decision maker may choose any action *a* that is available in state *s*. Then the process responds at the next time step by 
 randomly moving into a new state *s’*, and giving the decision maker a corresponding reward *Ra(s, s’)*.  The probability that the
 process moves into state *s’* is influenced by the chosen action *a*. There is function *Pa(s, s’)* which describes such transition.
 Thus the next state depends on the current state and the decision maker action but nothing more. For given *s* and *a* is conditionally
 independent of all previous states and actions. This condition is called Markov property. **MDPs** are extension of Markov chains;
 the difference here is presence of action (allowing choice) and reward (giving motivation). 