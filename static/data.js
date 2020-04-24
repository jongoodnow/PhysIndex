var db = {
	"equations": {
		"Kinematics Equation (no $\\Delta X$)": {
			"quickName": "v=v0+at",
			"representation": "$\\displaystyle{v=v_0+at}$",
			"fullName": "Kinematics Equation (no $\\Delta X$)",
			"description": "Kinematics is the study of classical mechanics which describes the motion of points, bodies (objects) and systems of bodies (groups of objects) without consideration of the causes of motion.",
			"definedVariable": "Velocity",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinematics",
			"variables": ["Acceleration", "Velocity", "Time"]
		},
		"Newton's Second Law": {
			"quickName": "f=ma",
			"representation": "$\\displaystyle{ \\sum{ \\vec{F} } = \\frac{d \\vec{p} }{dt} = m \\frac{d \\vec{v} }{dt} = m\\vec{a} }$",
			"fullName": "Newton's Second Law",
			"description": "The second law states that the net force on an object is equal to the rate of change (that is, the derivative) of its linear momentum p in an inertial reference frame. The second law can also be stated in terms of an object's acceleration. Since Newton's second law is only valid for constant-mass systems. Mass can be taken outside the differentiation operator by the constant factor rule in differentiation.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Newton%27s_laws_of_motion",
			"variables": ["Mass", "Acceleration", "Velocity", "Linear Momentum", "Force"]
		},
		"Kinematics Equation (no \"$a$\")": {
			"quickName": "x=(x_0)+(v_0)*t+0.5a*(t^2)",
			"representation": "$\\displaystyle{ x = \\frac{1}{2}(v_0 + v)t}$",
			"fullName": "Kinematics Equation (no \"$a$\")",
			"description": "Kinematics is the study of classical mechanics which describes the motion of points, bodies (objects) and systems of bodies (groups of objects) without consideration of the causes of motion.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinematics",
			"variables": ["Position", "Acceleration", "Velocity", "Time"]
		},
		"Kinematics Equation (no \"$t$\")": {
			"quickName": "v^2=(v_0^2)+2a*(x-x_0)",
			"representation": "$\\displaystyle{ v^2 = {v_0}^2 + 2a(x-x_0) }$",
			"fullName": "Kinematics Equation (no \"$t$\")",
			"description": "Kinematics is the study of classical mechanics which describes the motion of points, bodies (objects) and systems of bodies (groups of objects) without consideration of the causes of motion.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinematics",
			"variables": ["Position", "Acceleration", "Velocity"]
		},
		"Force of Friction": {
			"quickName": "F_fric=muF_n",
			"representation": "$\\displaystyle{ \\vec{F}_{fric} = \\mu \\vec{F}_n }$",
			"fullName": "Force of Friction",
			"description": "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other. When surfaces in contact move relative to each other, the friction between the two surfaces converts kinetic energy into heat. This property can have dramatic consequences, as illustrated by the use of friction created by rubbing pieces of wood together to start a fire",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Friction",
			"variables": ["Coefficient of Friction", "Normal Force", "Frictional Force"]
		},
		"Definition of Centripetal Acceleration": {
			"quickName": "a_c=(v^2)/r",
			"representation": "$\\displaystyle{ \\vec{a}_c = \\frac{ \\vec{v}^2 }{r} }$",
			"fullName": "Definition of Centripetal Acceleration",
			"description": "Acceleration, in physics, is the rate at which the velocity of an object changes over time. Velocity and acceleration are vector quantities, with magnitude and direction that add according to the parallelogram law. An object's acceleration, as described by Newton's Second Law, is due to the net force acting on the object, i.e., the net result of any and all forces acting on the object.",
			"definedVariable": "Centripetal Acceleration",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Acceleration",
			"variables": ["Centripetal Acceleration", "Velocity", "Radius"]
		},
		"Definition of Torque": {
			"quickName": "Tau=rxf",
			"representation": "$\\displaystyle{ \\vec{\\tau} = \\vec{r} \\times \\vec{F} = |r||F|\\sin{\\theta} = I \\vec{\\alpha} = \\frac{ d\\vec{L} }{ dt } }$",
			"fullName": "Definition of Torque",
			"description": "Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis, fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance vector and the force vector, which tends to produce rotation",
			"definedVariable": "Torque",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Torque",
			"variables": ["Torque", "Radius", "Force", "Angle", "Rotational Inertia", "Angular Acceleration"]
		},
		"Definition of Linear Momentum": {
			"quickName": "p=mv",
			"representation": "$\\displaystyle{ \\vec{p} = m\\vec{v} }$",
			"fullName": "Definition of Linear Momentum",
			"description": "In classical mechanics, linear momentum or translational momentum (pl. momenta; SI unit kg m/s, or equivalently, N s) is the product of the mass and velocity of an object. For example, a heavy truck moving quickly has a large momentum—it takes a large and prolonged force to get the truck up to this speed, and it takes a large and prolonged force to bring it to a stop afterwards.",
			"definedVariable": "Linear Momentum",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Momentum",
			"variables": ["Linear Momentum", "Mass", "Velocity"]
		},
		"Definition of Impulse": {
			"quickName": "J=int(F)dt",
			"representation": "$\\displaystyle{ \\vec{J} = \\int{ \\vec{F} \\cdot dt} = \\Delta \\vec{p} }$",
			"fullName": "Definition of Impulse",
			"description": "In classical mechanics, impulse (symbolized by J or Imp) is the change in linear momentum of a body. It may be defined or calculated as the product of the average force multiplied by the time over which the force is exerted. Impulse is a vector quantity since it is the result of integrating force, a vector quantity, over time. The SI unit of impulse is the newton second (N·s) or, in base units, the kilogram meter per second (kg·m/s)",
			"definedVariable": "Impulse",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Impulse_(physics)",
			"variables": ["Impulse", "Force"]
		},
		"Definition of Kinetic Energy": {
			"quickName": "K=0.5(mv^2)",
			"representation": "$\\displaystyle{ K = \\frac{1}{2} m v^2 }$",
			"fullName": "Definition of Kinetic Energy",
			"description": "In physics, the kinetic energy of an object is the energy which it possesses due to its motion. It is defined as the work needed to accelerate a body of a given mass from rest to its stated velocity. Having gained this energy during its acceleration, the body maintains this kinetic energy unless its speed changes.",
			"definedVariable": "Kinetic Energy",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinetic_energy",
			"variables": ["Kinetic Energy", "Mass", "Velocity"]
		},
		"Definition of Gravitational Potential Energy": {
			"quickName": "U=mgh",
			"representation": "$\\displaystyle{ U = mgh }$",
			"fullName": "Definition of Gravitational Potential Energy",
			"description": "In physics, potential energy is energy stored in a system of forcefully interacting physical entities. The SI unit for measuring work and energy is the joule (symbol J).The term potential energy was introduced by the 19th century Scottish engineer and physicist William Rankine, although it has links to Greek philosopher Aristotle's concept of potentiality.",
			"definedVariable": "Gravitational Potential Energy",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"variables": ["Gravitational Potential Energy", "Mass", "Gravitational Acceleration", "Position"]
		},
		"Definition of Work": {
			"quickName": "W=int(f)dx",
			"representation": "$\\displaystyle{ W = \\int{\\vec{F} \\cdot d\\vec{x}} = \\vec{F} \\cdot \\vec{d} = |F||d|\\cos{\\theta} }$",
			"fullName": "Definition of Work",
			"description": "A force is said to do work when it acts on a body, and there is a displacement of the point of application in the direction of the force. For example, when you lift a suitcase from the floor, the work done on the suitcase is the force it takes to lift it (its weight) times the height that it is lifted",
			"definedVariable": "Work",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Work_%28physics%29",
			"variables": ["Work", "Position", "Force"]
		},
		"Hooke's Law": {
			"quickName": "F_spring=-kx",
			"representation": "$\\displaystyle{ \\vec{F}_{spring} = -k \\vec{x} }$",
			"fullName": "Hooke's Law",
			"description": "Hooke's law is a principle of physics that states that the force  needed to extend or compress a spring by some distance  is proportional to that distance. That is: where  is a constant factor characteristic of the spring, its stiffness.Hooke's equation in fact holds (to some extent) in many other situations where an elastic body is deformed, such as wind blowing on a tall building, a musician plucking a string of a guitar, or the filling of a party balloon.",
			"definedVariable": "Spring Force",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Hooke%27s_law",
			"variables": ["Spring Force", "Spring Constant", "Position"]
		},
		"Definition of Spring Potential Energy": {
			"quickName": "U_spring=0.5k(x^2)",
			"representation": "$\\displaystyle{ U_{spring} = \\frac{1}{2} k x^2 }$",
			"fullName": "Definition of Spring Potential Energy",
			"description": "In physics, potential energy is energy stored in a system of forcefully interacting physical entities. The SI unit for measuring work and energy is the joule (symbol J).The term potential energy was introduced by the 19th century Scottish engineer and physicist William Rankine, although it has links to Greek philosopher Aristotle's concept of potentiality.",
			"definedVariable": "Spring Potential Energy",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"variables": ["Spring Potential Energy", "Spring Constant", "Position"]
		},
		"Spring Period": {
			"quickName": "T_spring=2pi(sqrt(m/k))",
			"representation": "$\\displaystyle{ T_{spring} = 2 \\pi \\sqrt{ \\frac{m}{k} } }$",
			"fullName": "Spring Period",
			"description": "The period of a spring defines how long, in seconds, it takes for the spring to go from stretched to compressed and back again when acted upon by some outside force",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Spring_physics",
			"variables": ["Pi", "Spring Constant", "Mass", "Spring Period"]
		},
		"Pendulum Period": {
			"quickName": "T_pendulum=2pi(sqrt(l/g))",
			"representation": "$\\displaystyle{ T_{pendulum} = 2 \\pi \\sqrt{ \\frac{l}{g} } }$",
			"fullName": "Pendulum Period",
			"description": "The mathematics of pendulums are in general quite complicated. Simplifying assumptions can be made, which in the case of a simple pendulum allows the equations of motion to be solved analytically for small-angle oscillations",
			"definedVariable": "Pendulum Period",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Pendulum_(mathematics)",
			"variables": ["Pendulum Period", "Pi", "Radius", "Gravitational Acceleration"]
		},
		"Definition of Period": {
			"quickName": "T=1/(freq)",
			"representation": "$\\displaystyle{ T = \\frac{1}{f} }$",
			"fullName": "Definition of Period",
			"description": "The period of a cyclic event is the time it takes for the system to complete one full revolution and return to its starting point. It is the inverse of frequency",
			"definedVariable": "Period",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Frequency",
			"variables": ["Period", "Frequency"]
		},
		"Potential Energy": {
			"quickName": "U = -int(F)dx",
			"representation": "$\\displaystyle{ U = - \\int{ \\vec{F} \\cdot d\\vec{x} } }$",
			"fullName": "Potential Energy",
			"description": "In physics, potential energy is energy stored in a system of forcefully interacting physical entities. The SI unit for measuring work and energy is the joule (symbol J).The term potential energy was introduced by the 19th century Scottish engineer and physicist William Rankine, although it has links to Greek philosopher Aristotle's concept of potentiality.",
			"definedVariable": "Potential Energy",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"variables": ["Potential Energy", "Force", "Position"]
		},
		"Newton's Law of Gravitation": {
			"quickName": "F_grav = -(Gm1m2)/(r^2)",
			"representation": "$\\displaystyle{ \\vec{F}_G = -G \\frac{ m_1 m_2 }{ \\vec{ r } ^2 } }$",
			"fullName": "Newton's Law of Gravitation",
			"description": "Newton's law of universal gravitation states that any two bodies in the universe attract each other with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them. (Separately it was shown that large spherically symmetrical masses attract and are attracted as if all their mass were concentrated at their centers.) This is a general physical law derived from empirical observations by what Isaac Newton called induction.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation",
			"variables": ["Gravitational Force", "Mass", "Radius"]
		},
		"Gravitational Potential": {
			"quickName": "U_g = -(Gm1m2)/(r)",
			"representation": "$\\displaystyle{ U_G = -\\frac{Gm_1m_2}{r} }$",
			"fullName": "Gravitational Potential",
			"description": "In classical mechanics, the gravitational potential at a location is equal to the work (energy transferred) per unit mass that is done by the force of gravity to move an object to a fixed reference location. It is analogous to the electric potential with mass playing the role of charge. The reference location, where the potential is zero, is by convention infinitely far away from any mass, resulting in a negative potential at any finite distance",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Gravitational_potential",
			"variables": ["Mass", "Gravitational Potential Energy", "Radius"]
		},
		"Definition of Coulomb Force": {
			"quickName": "F_E =(kq1q2/(r^2))",
			"representation": "$\\displaystyle{ \\vec{F}_E = K \\frac{ q_1 q_2 }{ \\vec{ r }^2 } }$ = ${\\frac{1}{4\\pi\\epsilon_0}} \\frac{ q_1 q_2 }{ \\vec{ r }^2 }$  ",
			"fullName": "Definition of Coulomb Force",
			"description": "Coulomb's law, or Coulomb's inverse-square law, is a law of physics describing the electrostatic interaction between electrically charged particles. The law was first published in 1785 by French physicist Charles Augustin de Coulomb and was essential to the development of the theory of electromagnetism. It is analogous to Isaac Newton's inverse-square law of universal gravitation.",
			"definedVariable": "Coulomb Force",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Coulomb%27s_law",
			"variables": ["Coulomb Force", "Coulomb's Constant", "Radius", "Electric Charge", "Electric Force", "Electric Constant", "Pi"]
		},
		"Electric Field Strength": {
			"quickName": "E=F/q",
			"representation": "$\\displaystyle{ \\vec{E} = \\frac{ \\vec{F} }{q} }$",
			"fullName": "Electric Field Strength",
			"description": "An electric field is generated by electrically charged particles and time-varying magnetic fields. The electric field describes the electric force experienced by a motionless positively charged test particle at any point in space relative to the source(s) of the field. The concept of an electric field was introduced by Michael Faraday",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_field",
			"variables": ["Electric Field", "Force", "Electric Charge"]
		},
		"Normal Force": {
			"quickName": "F_n = mg",
			"representation": "$\\displaystyle{ \\vec{F}_n = m \\vec{ g } \\cos{\\theta} }$",
			"fullName": "Normal Force",
			"description": "In mechanics, the normal force  is the component, perpendicular to the surface (surface being a plane) of contact, of the contact force exerted on an object by, for example, the surface of a floor or wall, preventing the object from penetrating the surface.The normal force is one of the components of the ground reaction force and may coincide with it, for example considering a person standing still on the ground, in which case the ground reaction force reduces to the normal force. In another common situation, if an object hits a surface with some speed, and the surface can withstand it, the normal force provides for a rapid deceleration, which will depend on the flexibility of the surface",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Normal_force",
			"variables": ["Normal Force", "Mass", "Gravitational Acceleration", "Angle"]
		},
		"Definition of Centripetal Force": {
			"quickName": "F_c = ma_c",
			"representation": "$\\displaystyle{ \\vec{F}_c = m \\vec{a}_c }$",
			"fullName": "Definition of Centripetal Force",
			"description": "In physics, a force is any external effort that causes an object to undergo a certain change, either concerning its movement, direction, or geometrical construction. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate, or a flexible object to deform, or both. Force can also be described by intuitive concepts such as a push or a pull.",
			"definedVariable": "Centripetal Force",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Force",
			"variables": ["Centripetal Force", "Mass", "Centripetal Acceleration"]
		},
		"Definition of Center of Mass": {
			"quickName": "r_cm",
			"representation": "$\\displaystyle{ \\vec{r}_{cm} = \\frac{ m_1\\vec{r}_1 + m_2\\vec{r}_2 }{ m_1 + m_2 } }$",
			"fullName": "Definition of Center of Mass",
			"description": "In physics, the center of mass of a distribution of mass in space is the unique point where the weighted relative position of the distributed mass sums to zero. The distribution of mass is balanced around the center of mass and the average of the weighted position coordinates of the distributed mass defines its coordinates. Calculations in mechanics are often simplified when formulated with respect to the center of mass",
			"definedVariable": "Center of Mass",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Center_of_mass",
			"variables": ["Center of Mass", "Mass", "Radius"]
		},
		"Work-Energy Theorem": {
			"quickName": "Wnet=deltak",
			"representation": "$\\displaystyle{ W_{net} = \\Delta K = K_f - K_i }$",
			"fullName": "Work-Energy Theorem",
			"description": "In physics, a force is said to do work when it acts on a body, and there is a displacement of the point of application in the direction of the force. For example, when you lift a suitcase from the floor, the work done on the suitcase is the force it takes to lift it (its weight) times the height that it is lifted.The term work was introduced in 1826 by the French mathematician Gaspard-Gustave Coriolis as \"weight lifted through a height\", which is based on the use of early steam engines to lift buckets of water out of flooded ore mines.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Work_(physics)",
			"variables": ["Kinetic Energy", "Net Work"]
		},
		"Electric Dipole Moment": {
			"quickName": "p = qd",
			"representation": "$\\displaystyle{ p = qd }$",
			"fullName": "Electric Dipole Moment",
			"description": "In physics, the electric dipole moment is a measure of the separation of positive and negative electrical charges in a system of electric charges, that is, a measure of the charge system's overall polarity. The SI units are Coulomb-meter (C m). This article is limited to static phenomena, and does not describe time-dependent or dynamic polarization",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_dipole_moment",
			"variables": ["Electric Dipole Moment"]
		},
		"Electric Charge": {
			"quickName": "q = ne",
			"representation": "$\\displaystyle{ q = ne }$",
			"fullName": "Electric Charge",
			"description": "Electric charge is the physical property of matter that causes it to experience a force when close to other electrically charged matter. There are two types of electric charges – positive and negative. Positively charged substances are repelled from other positively charged substances, but attracted to negatively charged substances; negatively charged substances are repelled from negative and attracted to positive.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_charge",
			"variables": ["Electric Charge"]
		},
		"Definition of Angular Momentum": {
			"quickName": "L=rxp",
			"representation": "$\\displaystyle{ \\vec{L} =\\vec{r} \\times \\vec{p} = |r||p|\\sin{\\theta} = I\\omega }$",
			"fullName": "Definition of Angular Momentum",
			"description": "In physics, angular momentum, moment of momentum, or rotational momentum is a measure of the amount of rotation an object has, taking into account its mass, shape and speed. It is a vector quantity that represents the product of a body's rotational inertia and rotational velocity about a particular axis",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angular_momentum",
			"variables": ["Angular Velocity", "Angle", "Linear Momentum", "Radius", "Angular Momentum"]
		},
		"Definition of Mechanical Power": {
			"quickName": "P=W/t",
			"representation": "$\\displaystyle{ P = \\frac{ dW }{ dt } = \\vec{F} \\cdot \\vec{v} = |F||v|\\cos{\\theta} }$",
			"fullName": "Definition of Mechanical Power",
			"description": "In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. In the MKS system, the unit of power is the joule per second (J/s), known as the watt in honor of James Watt, the eighteenth-century developer of the steam engine",
			"definedVariable": "Mechanical Power",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Power_(physics)",
			"variables": ["Work", "Angle", "Time", "Velocity", "Force", "Mechanical Power"]
		},
		"Definition of Angular Velocity": {
			"quickName": "omega = theta/t",
			"representation": "$\\displaystyle{ \\vec{ \\omega } = \\frac{ d \\vec{\\theta} }{ dt }}$",
			"fullName": "Definition of Angular Velocity",
			"description": "Angular velocity is the change in angle per unit time. For a rigid body in constant rotation, the angular velocity is the same for all points on the body. Angular velocity is a vector quantity, and angular speed is the magnitude of this velocity. The direction of the angular velocity vector is perpendicular to the plane of rotation, in a direction which is usually specified by the right-hand rule",
			"definedVariable": "Angular Velocity",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angular_velocity",
			"variables": ["Angular Velocity", "Angle"]
		},
		"Definition of Acceleration": {
			"quickName": "a = dv/dt = d^2x/dt^2",
			"representation": "$\\displaystyle{ \\vec{a} = \\frac{ d \\vec{v} }{ dt } = \\frac{ d^2 \\vec{x} }{ dt^2 } }$",
			"fullName": "Definition of Acceleration",
			"description": "Acceleration, in physics, is the rate at which the velocity of an object changes over time. Velocity and acceleration are vector quantities, with magnitude and direction that add according to the parallelogram law. An object's acceleration, as described by Newton's Second Law, is due to the net force acting on the object, i.e., the net result of any and all forces acting on the object.",
			"definedVariable": "Acceleration",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Acceleration",
			"variables": ["Velocity", "Position", "Time", "Acceleration"]
		},
		"Kinematics Equation (no \"$v_0$\")": {
			"quickName": "x=(x_0)+(v)*t-0.5a*(t^2)",
			"representation": "$\\displaystyle{\\displaystyle{ x = x_0 + vt - \\frac{1}{2}at^2 }}$",
			"fullName": "Kinematics Equation (no \"$v_0$\")",
			"description": "Kinematics is the study of classical mechanics which describes the motion of points, bodies (objects) and systems of bodies (groups of objects) without consideration of the causes of motion.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinematics",
			"variables": ["Position", "Acceleration", "Velocity", "Time"]
		},
		"Kinematics Equation (no \"$v$\")": {
			"quickName": "x=1/2(v_0+v)*t",
			"representation": "$\\displaystyle x = x_0 + v_0t + \\frac{1}{2}at^2 $",
			"fullName": "Kinematics Equation (no \"$v$\")",
			"description": "Kinematics is the study of classical mechanics which describes the motion of points, bodies (objects) and systems of bodies (groups of objects) without consideration of the causes of motion.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinematics",
			"variables": ["Position", "Time", "Velocity"]
		},
		"Mass–Energy Equivalence": {
			"quickName": "E=mc^2",
			"representation": "$\\displaystyle{E=mc^2}$",
			"fullName": "Mass–Energy Equivalence",
			"description": "In physics, mass–energy equivalence is the concept that the mass of an object or system is a measure of its energy content. The equation $E = mc^2$ can be applied to rest mass ($m$ or $m_0$) and rest energy ($E_0$) to show their proportionality as $E_0 = m_0c^2$. In inertial reference frames other than the rest frame or center of mass frame, the equation $E = mc^2$ remains true if the energy is the relativistic energy and the mass is the relativistic mass. However, connection of the total or relativistic energy ($E_r$) with the rest or invariant mass ($m_0$) requires consideration of the system total momentum, in systems and reference frames where the total momentum has a non-zero value. The formula then required to connect the two different kinds of mass and energy, is the extended version of Einstein's equation, $E_r = \\sqrt{(m_0c^2)^2 + (pc)^2}$ called the relativistic energy–momentum relatio",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Mass%E2%80%93energy_equivalence",
			"variables": ["Mass", "Speed of Light", "Energy"]
		},
		"Pouillet's law": {
			"quickName": "r=rho*l/A",
			"representation": "$R=\\frac{\\rho \\ell}{ \\textrm{A} }$",
			"fullName": "Pouillet's law",
			"description": "The resistance of a given material will increase with the length, but decrease with increasing cross-sectional area. From the above equations, resistivity has SI units of ohm⋅meter. This formula can be used to intuitively understand the meaning of a resistivity value. For example, if $A=1\\text{m}^2$ and $\\ell=1\\text{m}$ (forming a cube with perfectly-conductive contacts on opposite faces), then the resistance of this element in ohms is numerically equal to the resistivity of the material it is made of in ohm-meters.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity",
			"variables": ["Electric Resistance", "Cross Section", "Electrical Resistivity", "Length"]
		},
		"Ohm's Law": {
			"quickName": "v=ir",
			"representation": "$\\displaystyle{V=IR}$",
			"fullName": "Ohm's Law",
			"description": "Ohm's law states that the current through a conductor between two points is directly proportional to the potential difference across the two points. The  constant of proportionality in this case is the resistance. In circuit analysis, three equivalent expressions of Ohm's law are used interchangeably: $I = \\frac{V}{R} \\quad \\text{or}\\quad V = IR \\quad \\text{or} \\quad R = \\frac{V}{I}$.",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Ohm%27s_law",
			"variables": ["Voltage", "Electric Resistance", "Electric Current"]
		},
		"Definition of Lorentz Factor": {
			"quickName": "gamma",
			"representation": "$\\displaystyle{\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = \\frac{1}{\\sqrt{1 - \\beta^2}}} $",
			"fullName": "Definition of Lorentz Factor",
			"description": "The Lorentz factor or Lorentz term is an expression which appears in several equations in special relativity. It arises from deriving the Lorentz transformations.",
			"definedVariable": "Lorentz Factor",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Lorentz_factor",
			"variables": ["Speed of Light", "Velocity to Speed of Light Ratio", "Velocity", "Lorentz Factor"]
		},
		"Time Dilation": {
			"quickName": "t=t'gamma",
			"representation": "$\\displaystyle{\\Delta t' = \\gamma \\Delta t}$",
			"fullName": "Time Dilation",
			"description": "In the theory of relativity, time dilation is an actual difference of elapsed time between two events as measured by observers either moving relative to each other or differently situated from gravitational masses.An accurate clock at rest with respect to one observer may be measured to tick at a different rate when compared to a second observer's own equally accurate clocks. The time (∆t' ) between two ticks as measured in the frame in which the clock is moving, is longer than the time (∆t) between these ticks as measured in the rest frame of the cloc",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Time_dilation",
			"variables": ["Lorentz Factor", "Time"]
		},
		"Length Contraction": {
			"quickName": "gammax'=x/gamma",
			"representation": "$\\displaystyle{\\Delta x' = \\frac{\\Delta x}{\\gamma} }$",
			"fullName": "Length Contraction",
			"description": "In physics, length contraction is the phenomenon of a decrease in length measured by the observer of an object which is traveling at any non-zero velocity relative to the observer. This contraction (more formally called Lorentz contraction or Lorentz–FitzGerald contraction after Hendrik Lorentz and George FitzGerald) is usually only noticeable at a substantial fraction of the speed of light. Length contraction is only in the direction parallel to the direction in which the observed body is travelling. The length (∆x' ) of an object as measured in the frame in which it is moving, is shorter than its length (∆x) in its own rest fram",
			"definedVariable": null,
			"descriptionUrl": "http://en.wikipedia.org/wiki/Length_contraction",
			"variables": ["Position", "Lorentz Factor"]
		}
	},
	"units": {
		"meter": {
			"quickName": "m",
			"representation": "$\\displaystyle{\\textrm{m}}$",
			"fullName": "meter",
			"description": "The meter is the fundamental unit of length  in the International System of Units (SI). Originally intended to be one ten-millionth of the distance from the Earth's equator to the North Pole (at sea level), its definition has been periodically refined to reflect growing knowledge of metrology.",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Metre",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{m}}\\right)$",
			"composition": []
		},
		"kilogram": {
			"quickName": "kg",
			"representation": "$\\displaystyle{\\textrm{kg}}$",
			"fullName": "kilogram",
			"description": "The kilogram is the base unit of mass in the International System of Units (SI). Historically, a kilogram was defined as the mass of one cubic liter of water. The mass of a kilogram today is defined as the mass of a platinum-iridium cylinder internationally agreed-upon to be one kilogram.",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kilogram",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{kg}}\\right)$",
			"composition": []
		},
		"second": {
			"quickName": "s",
			"representation": "$\\displaystyle{\\textrm{s}}$",
			"fullName": "second",
			"description": "The second is the base unit of time in the International System of Units (SI) and is also a unit of time in other systems of measurement; it is the second division of the hour by sixty, the first division by 60 being the minute. Between AD 1000 (when al-Biruni used seconds) and 1960 the second was defined as 1/86,400 of a mean solar day (that definition still applies in some astronomical and legal contexts). Between 1960 and 1967, it was defined in terms of the period of the Earth's orbit around the Sun in 1900, but it is now defined more precisely in atomic terms.",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Second",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{s}}\\right)$",
			"composition": []
		},
		"mole": {
			"quickName": "mol",
			"representation": "$\\displaystyle{\\textrm{mol}}$",
			"fullName": "mole",
			"description": "Mole is a unit of measurement used to express amounts of a chemical substance, defined as the amount of any substance that contains as many elementary entities (e.g., atoms, molecules, ions, electrons). One mole is defined as $6.02214199\\times10^{23}$ particles, this numerical value being Avogadro's number.",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Mole_(unit)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{mol}}\\right)$",
			"composition": []
		},
		"Kelvin": {
			"quickName": "K",
			"representation": "$\\displaystyle{\\textrm{K}}$",
			"fullName": "Kelvin",
			"description": "The kelvin is a unit of measurement for temperature. It is one of the seven base units in the International System of Units (SI) and is assigned the unit symbol K. The kelvin scale is an absolute, thermodynamic temperature scale using as its null point absolute zero, the temperature at which all thermal motion ceases in the classical description of thermodynamics. ",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kelvin",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{K}}\\right)$",
			"composition": []
		},
		"Celsius": {
			"quickName": "C",
			"representation": "$° \\textrm{C}$",
			"fullName": "Celsius",
			"description": "Celsius, also known as centigrade, is a scale and unit of measurement for temperature. It is named after the Swedish astronomer Anders Celsius (1701–1744), who developed a similar temperature scale. The degree Celsius (°C) can refer to a specific temperature on the Celsius scale as well as a unit to indicate a temperature interval, a difference between two temperatures or an uncertainty. ",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Celsius",
			"definitionRepresentation": "$\\left(° \\textrm{C}\\right)$",
			"composition": []
		},
		"Ampere": {
			"quickName": "A",
			"representation": "$\\displaystyle{\\textrm{A}}$",
			"fullName": "Ampere",
			"description": "The ampere, often shortened to amp, is the SI unit of electric current and is one of the seven SI base units. It is named after André-Marie Ampère (1775–1836), French mathematician and physicist, considered the father of electrodynamics. In practical terms, the ampere is a measure of the amount of electric charge passing a point in an electric circuit per unit time, with $6.241 \\times 10^{18}$ electrons (or one coulomb) per second constituting one ampere.",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Ampere",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{A}}\\right)$",
			"composition": []
		},
		"Joule": {
			"quickName": "J",
			"representation": "$\\displaystyle{\\textrm{J}}$",
			"fullName": "Joule",
			"description": "The joule is a derived unit of energy, work, or amount of heat in the International System of Units. It is equal to the energy expended (or work done) in applying a force of one newton through a distance of one meter (1 newton meter or N·m), or in passing an electric current of one ampere through a resistance of one ohm for one second. One joule can also be defined as the work required to move an electric charge of one coulomb through an electrical potential difference of one volt.\r\nIn terms firstly of base SI units and then in terms of other SI units:\r\n\r\n$\\rm J  = {}\\rm \\frac{kg \\cdot m^2}{s^2} = N \\cdot m = \\rm Pa \\cdot m^3={}\\rm W \\cdot s = C \\cdot V$",
			"compositionRepresentation": "$ \\frac{ \\textrm{kg} \\cdot \\textrm{m}^2}{ \\textrm{s}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Joule",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{J}}\\right)$",
			"composition": ["kilogram", "meter", "second"]
		},
		"Newton": {
			"quickName": "N",
			"representation": "$\\displaystyle{\\textrm{N}}$",
			"fullName": "Newton",
			"description": "The newton is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newton's second law of motion. Newton's second law of motion states that $F = ma$, where $F$ is the force applied, $m$ is the mass of the object receiving the force, and $a$ is the acceleration of the object.",
			"compositionRepresentation": "$\\frac{ \\textrm{kg} \\cdot {\\textrm{m}}}{ \\textrm{s}^2 }$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Newton_(unit)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{N}}\\right)$",
			"composition": ["kilogram", "meter", "second"]
		},
		"Coulomb": {
			"quickName": "C",
			"representation": "$\\displaystyle{\\textrm{C}}$",
			"fullName": "Coulomb",
			"description": "The coulomb (named after Charles-Augustin de Coulomb) is a fundamental unit of electrical charge, and is also the SI derived unit of electric charge. It is equal to the charge of approximately $6.241\\times10^{18}$ electrons.",
			"compositionRepresentation": "$A \\cdot s$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Coulomb",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{C}}\\right)$",
			"composition": ["Ampere", "second"]
		},
		"Volt": {
			"quickName": "V",
			"representation": "$\\displaystyle{\\textrm{V}}$",
			"fullName": "Volt",
			"description": "The volt is the derived unit for electric potential, electric potential difference (voltage), and electromotive force. Additionally, it is the potential difference between two points that will impart one joule of energy per coulomb of charge that passes through it. It can be expressed in terms of SI base units (m, kg, s, and A) as:\r\n$\\mathrm{V = \\frac{kg \\cdot m^2}{A \\cdot s^3} }$\r\nIt can also be expressed as amperes times ohms (current times resistance, Ohm's law), watts per ampere (power per unit current, Joule's law), or joules per coulomb (energy per unit charge):\r\n$\\mathrm{V =A \\cdot \\Omega = \\frac{W}{A} =  \\frac{J}{C} }$",
			"compositionRepresentation": "$ \\frac{ \\textrm{J}}{ \\textrm{C} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Volt",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{V}}\\right)$",
			"composition": ["Joule", "Coulomb"]
		},
		"Henry": {
			"quickName": "H",
			"representation": "$\\displaystyle{\\textrm{H}}$",
			"fullName": "Henry",
			"description": "In physics, and electronics, the henry is the SI derived unit of inductance. It is named after Joseph Henry (1797–1878), the American scientist who discovered electromagnetic induction. The magnetic permeability of a vacuum is $4\\pi\\times10^{−7}$ H/m (henry per meter).",
			"compositionRepresentation": "$\\frac{ \\textrm{V} \\cdot \\textrm{ s } }{\\textrm{A}} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Henry_(unit)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{H}}\\right)$",
			"composition": ["Volt", "second", "Ampere"]
		},
		"Ohm": {
			"quickName": "omega",
			"representation": "$\\displaystyle{\\Omega}$",
			"fullName": "Ohm",
			"description": "The ohm is the SI derived unit of electrical resistance, named after German physicist Georg Simon Ohm. Although several empirically derived standard units for expressing electrical resistance were developed in connection with early telegraphy practice, the British Association for the Advancement of Science proposed a unit derived from existing units of mass, length and time and of a convenient size for practical work as early as 1861. The definition of the \"ohm\" unit was revised several times. Today the value of the ohm is expressed in terms of the quantum Hall effect.",
			"compositionRepresentation": "$\\frac{ \\textrm{V} }{ \\textrm{A} }$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Ohm",
			"definitionRepresentation": "$\\left(\\displaystyle{\\Omega}\\right)$",
			"composition": ["Volt", "Ampere"]
		},
		"Hertz": {
			"quickName": "Hz",
			"representation": "$\\displaystyle{\\textrm{Hz}}$",
			"fullName": "Hertz",
			"description": "The hertz  is the unit of frequency in the International System of Units (SI). It is defined as one cycle per second. One of its most common uses is the description of the sine wave, particularly those used in radio and audio applications, such as the frequency of musical tones. ",
			"compositionRepresentation": "$ \\frac{ 1 }{ \\textrm{ s } } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Hertz",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{Hz}}\\right)$",
			"composition": ["second"]
		},
		"Pascal": {
			"quickName": "Pa",
			"representation": "$\\displaystyle{\\textrm{Pa}}$",
			"fullName": "Pascal",
			"description": "The pascal is the SI derived unit of pressure, internal pressure, stress, Young's modulus and tensile strength, named after the French physicist, Blaise Pascal. It is a measure of force per unit area, defined as one newton per square meter. On Earth, the standard atmospheric pressure is precisely 101.325 kPa by definition.",
			"compositionRepresentation": "$ \\frac{ \\textrm{N} }{ \\textrm{m}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Pascal_(unit)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{Pa}}\\right)$",
			"composition": ["Newton", "Volt"]
		},
		"Tesla": {
			"quickName": "T",
			"representation": "$\\displaystyle{\\textrm{T}}$",
			"fullName": "Tesla",
			"description": "The tesla  is the SI derived unit of magnetic field strength or magnetic flux density, commonly denoted as $B$. One tesla is equal to one weber per square metre, and it was defined in 1960 in honour of Nikola Tesla. The strongest fields encountered from permanent magnets are from Halbach spheres which can be over 4.5 T.",
			"compositionRepresentation": "$ \\frac{ \\textrm{Wb} }{ \\textrm{m}^2 } = \\frac{ N \\cdot m }{ A } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Tesla_%28unit%29",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{T}}\\right)$",
			"composition": ["Weber", "meter", "Newton", "Volt", "Ampere"]
		},
		"Radian": {
			"quickName": "rad",
			"representation": "$\\displaystyle{\\textrm{rad}}$",
			"fullName": "Radian",
			"description": "The radian is the standard unit of angular measure, used in many areas of mathematics. An angle's measurement in radians is numerically equal to the length of a corresponding arc of a unit circle, so one radian is just under 57.3 degrees (when the arc length is equal to the radius). one radian is equal to 180/π degrees. Thus, to convert from radians to degrees, multiply by 180/π. $ \\text{angle in degrees} = \\text{angle in radians} \\cdot \\frac {180^\\circ} {\\pi}$",
			"compositionRepresentation": "base",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Radian",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{rad}}\\right)$",
			"composition": []
		},
		"Farad": {
			"quickName": "f",
			"representation": "$\\displaystyle{\\textrm{F}}$",
			"fullName": "Farad",
			"description": "One farad is defined as the capacitance of a capacitor across which, when charged with one coulomb of electricity, there is a potential difference of one volt. Conversely, it is the capacitance which, when charged to a potential difference of one volt, carries a charge of one coulomb. A coulomb is equal to the amount of charge (electrons) produced by a current of one ampere flowing for one second. For example, the voltage across the two terminals of a 47 nF capacitor will increase linearly by 1 V when a current of 47 nA flows through it for 1 s.",
			"compositionRepresentation": "$ \\frac{ C }{ V } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Farad",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{F}}\\right)$",
			"composition": ["Coulomb", "Volt"]
		},
		"Watt": {
			"quickName": "W",
			"representation": "$\\displaystyle{\\textrm{W}}$",
			"fullName": "Watt",
			"description": "The watt (symbol: W) is a derived unit of power in the International System of Units (SI). The unit is defined as the rate of energy conversion or transfer with respect to time. When an object's velocity is held constant at one meter per second against constant opposing force of one newton the rate at which work is done is 1 watt.\r\n\r\n$\\mathrm{W = \\frac{J}{s} = \\frac{N\\cdot m}{s} = \\frac{kg\\cdot m^2}{s^3}}$\r\nIn terms of electromagnetism, one watt is the rate at which work is done when one ampere (A) of current flows through an electrical potential difference of one volt (V).\r\n\r\n$\\mathrm{W = V \\cdot A}$\r\nTwo additional unit conversions for watt can be found using the above equation and Ohm's Law.\r\n\r\n$\\mathrm{W = \\frac{V^2}{\\Omega} = A^2\\cdot\\Omega}$\r\nWhere ohm ($\\Omega$) is the SI derived unit of electrical resistance.",
			"compositionRepresentation": "$ \\frac{ \\textrm{J} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Watt",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{W}}\\right)$",
			"composition": ["Joule", "second"]
		},
		"Electron Volt": {
			"quickName": "eV",
			"representation": "$\\displaystyle{\\textrm{eV}}$",
			"fullName": "Electron Volt",
			"description": "In physics, the electron volt is a unit of energy equal to approximately $1.6 \\times 10^{−19} \\textrm{J}$. By definition, it is the amount of energy gained (or lost) by the charge of a single electron moved across an electric potential difference of one volt. Thus it is 1 volt (1 joule per coulomb, 1 $J/C$) multiplied by the elementary charge ($e$, or $1.602176565(35) \\times10^{−19} \\textrm{C}$). ",
			"compositionRepresentation": "$\\frac{\\textrm{J}}{\\textrm{C}} \\cdot e$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electronvolt",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{eV}}\\right)$",
			"composition": ["Joule", "Coulomb"]
		},
		"Weber": {
			"quickName": "Wb",
			"representation": "$\\textrm{Wb}$",
			"fullName": "Weber",
			"description": "In physics, the weber is the SI unit of magnetic flux. A flux density of one $ \\frac{ \\textrm{Wb}}{ \\textrm{m}^2 } $ (one weber per square metre) is one tesla. The weber may be defined in terms of Faraday's law, which relates a changing magnetic flux through a loop to the electric field around the loop. A change in flux of one weber per second will induce an electromotive force of one volt (produce an electric potential difference of one volt across two open-circuited terminals).",
			"compositionRepresentation": "$\\frac{ \\textrm{kg} \\cdot \\textrm{ m}^2 }{\\textrm{s}^2\\cdot\\textrm{A}} $ = $ \\textrm{T}\\cdot\\textrm{m}^2 $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Weber_(unit)",
			"definitionRepresentation": "$\\left(\\textrm{Wb}\\right)$",
			"composition": ["kilogram", "meter", "second", "Ampere", "Tesla"]
		}
	},
	"variables": {
		"Force": {
			"quickName": "F",
			"representation": "$\\displaystyle{\\vec{F}}$",
			"fullName": "Force",
			"description": "In physics, a force is any external effort that causes an object to undergo a certain change, either concerning its movement, direction, or geometrical construction. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate, or a flexible object to deform, or both. Force can also be described by intuitive concepts such as a push or a pull. ",
			"units": "$ \\textrm{N} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Force",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Newton's Second Law", "Definition of Torque", "Definition of Impulse", "Definition of Work", "Potential Energy", "Electric Field Strength", "Definition of Mechanical Power"]
		},
		"Mass": {
			"quickName": "m",
			"representation": "$\\displaystyle{\\textrm{m}}$",
			"fullName": "Mass",
			"description": "In physics, mass is a property of a physical body which determines the body's resistance to being accelerated by a force and the strength of its mutual gravitational attraction with other bodies. The SI unit of mass is the kilogram. As mass is difficult to measure directly, usually balances or scales are used to measure the weight of an object, and the weight is used to calculate the object's mass. ",
			"units": "$ \\textrm{kg} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Mass",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{m}}\\right)$",
			"unitComposition": ["kilogram"],
			"equations": ["Newton's Second Law", "Definition of Linear Momentum", "Definition of Kinetic Energy", "Definition of Gravitational Potential Energy", "Spring Period", "Newton's Law of Gravitation", "Gravitational Potential", "Normal Force", "Definition of Centripetal Force", "Definition of Center of Mass", "Mass–Energy Equivalence"]
		},
		"Position": {
			"quickName": "x",
			"representation": "$\\displaystyle{\\vec{x}}$",
			"fullName": "Position",
			"description": "In geometry, a position or position vector, also known as location vector or radius vector, is a Euclidean vector that represents the position of a point $P$ in space in relation to an arbitrary reference origin $O$.",
			"units": "$ \\textrm{m} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Position_%28vector%29",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{x}}\\right)$",
			"unitComposition": ["meter"],
			"equations": ["Kinematics Equation (no \"$a$\")", "Kinematics Equation (no \"$t$\")", "Definition of Gravitational Potential Energy", "Definition of Work", "Hooke's Law", "Definition of Spring Potential Energy", "Potential Energy", "Definition of Acceleration", "Kinematics Equation (no \"$v_0$\")", "Kinematics Equation (no \"$v$\")", "Length Contraction"]
		},
		"Speed of Light": {
			"quickName": "c",
			"representation": "$\\displaystyle{c}$",
			"fullName": "Speed of Light",
			"description": "The speed of light in vacuum, commonly denoted $c$, is a universal physical constant important in many areas of physics. Its value is exactly $299,792,458$ meters per second, a figure that is exact because the length of the meter is defined from this constant and the international standard for time. This is, to three significant figures, $186,000$ miles per second, or about $671$ million miles per hour. ",
			"units": "$ \\frac{ \\textrm{m} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Speed_of_light",
			"definitionRepresentation": "$\\left(\\displaystyle{c}\\right)$",
			"unitComposition": ["second", "meter"],
			"equations": ["Mass–Energy Equivalence", "Definition of Lorentz Factor"]
		},
		"Newtonian Gravitational Constant": {
			"quickName": "G",
			"representation": "$\\displaystyle{\\textrm{G}}$",
			"fullName": "Newtonian Gravitational Constant",
			"description": "The gravitational constant, approximately $6.67 \\times10^{−11} \\textrm{N} \\cdot \\frac{\\textrm{m}}{\\textrm{kg}^2}$, is an empirical physical constant involved in the calculation(s) of gravitational force between two bodies. It usually appears in Sir Isaac Newton's law of universal gravitation, and in Albert Einstein's general theory of relativity. It is also known as the universal gravitational constant, Newton's constant, and colloquially as Big G. ",
			"units": "$ \\frac{ \\textrm{N} \\cdot \\textrm{m}^2 }{ \\textrm{kg}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Gravitational_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{G}}\\right)$",
			"unitComposition": ["kilogram", "Newton", "meter"],
			"equations": []
		},
		"Avogadro's Number": {
			"quickName": "N_A",
			"representation": "$\\displaystyle{N_A}$",
			"fullName": "Avogadro's Number",
			"description": "In chemistry and physics, the Avogadro constant is defined as the number of constituent particles (usually atoms or molecules) per mole of a given substance, where the mole is one of the seven base units in the International System of Units (SI). Its value is equal to $6.02214129 \\times10^{23} mol^{−1}$",
			"units": "$ \\frac{1}{ \\textrm{mol} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Avogadro_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{N_A}\\right)$",
			"unitComposition": ["mole"],
			"equations": []
		},
		"Electric Constant": {
			"quickName": "e_0",
			"representation": "$\\displaystyle{\\epsilon_0}$",
			"fullName": "Electric Constant",
			"description": "The physical constant $\\epsilon_0$, commonly called the vacuum permittivity, permittivity of free space or electric constant, is an ideal, (baseline) physical constant, which is the value of the absolute dielectric permittivity of classical vacuum. Its value is $\\epsilon_0 = 8.854 187 817... \\times 10^{−12} \\frac{\\textrm{F}}{\\textrm{m}}$.",
			"units": "$ \\frac{ \\textrm{F} }{ \\textrm{m} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Vacuum_permittivity",
			"definitionRepresentation": "$\\left(\\displaystyle{\\epsilon_0}\\right)$",
			"unitComposition": ["Farad", "meter"],
			"equations": ["Definition of Coulomb Force"]
		},
		"Magnetic Constant (permeability of free space)": {
			"quickName": "mu_0",
			"representation": "$\\displaystyle{\\mu_0}$",
			"fullName": "Magnetic Constant (permeability of free space)",
			"description": "In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. In other words, it is the degree of magnetization that a material obtains in response to an applied magnetic field. Magnetic permeability is typically represented by the Greek letter μ. ",
			"units": "$ \\frac{ \\textrm{H} }{ \\textrm{m} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Permeability_(electromagnetism)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\mu_0}\\right)$",
			"unitComposition": ["Henry", "meter"],
			"equations": []
		},
		"Boltzmann Constant": {
			"quickName": "boltz constant",
			"representation": "$\\displaystyle{\\textrm{k}}$",
			"fullName": "Boltzmann Constant",
			"description": "The Boltzmann constant (kB or k), named after Ludwig Boltzmann, is a physical constant relating energy at the individual particle level with temperature. It has the same dimension (energy divided by temperature) as entropy. The accepted value in SI units is $1.3806488(13) \\times 10^{−23} \\frac{\\textrm{J}}{\\textrm{K}}$.",
			"units": "$ \\frac{ \\textrm{J} }{ \\textrm{K} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Boltzmann_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{k}}\\right)$",
			"unitComposition": ["Kelvin", "Joule"],
			"equations": []
		},
		"Elementary Charge": {
			"quickName": "elementary charge",
			"representation": "$\\displaystyle{e}$",
			"fullName": "Elementary Charge",
			"description": "The elementary charge, usually denoted as e or sometimes q, is the electric charge carried by a single proton, or equivalently, the negation (opposite) of the electric charge carried by a single electron. This elementary charge is a fundamental physical constant. It's value is $1.60217657 \\times 10^{-19} C$.",
			"units": "$ \\textrm{C} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Elementary_charge",
			"definitionRepresentation": "$\\left(\\displaystyle{e}\\right)$",
			"unitComposition": ["Coulomb"],
			"equations": []
		},
		"Electron Mass": {
			"quickName": "electron mass",
			"representation": "$\\displaystyle{m_e}$",
			"fullName": "Electron Mass",
			"description": "The electron (symbol: $e−$) is a subatomic particle with a negative elementary electric charge. Electrons belong to the first generation of the lepton particle family, and are generally thought to be elementary particles because they have no known components or substructure. The electron has a mass that is approximately 1/1836 that of the proton. ",
			"units": "$ \\textrm{kg} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electron",
			"definitionRepresentation": "$\\left(\\displaystyle{m_e}\\right)$",
			"unitComposition": ["kilogram"],
			"equations": []
		},
		"Proton Mass": {
			"quickName": "proton mass",
			"representation": "$\\displaystyle{m_p}$",
			"fullName": "Proton Mass",
			"description": "The proton is a subatomic particle with the symbol p or p+ and a positive electric charge of 1 elementary charge. One or more protons are present in the nucleus of each atom. Protons and neutrons are collectively referred to as \"nucleons\". ",
			"units": "$ \\textrm{kg} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Proton",
			"definitionRepresentation": "$\\left(\\displaystyle{m_p}\\right)$",
			"unitComposition": ["kilogram"],
			"equations": []
		},
		"Acceleration": {
			"quickName": "a",
			"representation": "$\\displaystyle{\\vec{a}}$",
			"fullName": "Acceleration",
			"description": "Acceleration, in physics, is the rate at which the velocity of an object changes over time. Velocity and acceleration are vector quantities, with magnitude and direction that add according to the parallelogram law. An object's acceleration, as described by Newton's Second Law, is due to the net force acting on the object, i.e., the net result of any and all forces acting on the object. ",
			"units": "$ \\frac{ \\textrm{m} }{ \\textrm{s}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Acceleration",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{a}}\\right)$",
			"unitComposition": ["meter", "second"],
			"equations": ["Definition of Acceleration", "Kinematics Equation (no $\\Delta X$)", "Newton's Second Law", "Kinematics Equation (no \"$a$\")", "Kinematics Equation (no \"$t$\")", "Kinematics Equation (no \"$v_0$\")"]
		},
		"Torque": {
			"quickName": "tau",
			"representation": "$\\displaystyle{ \\vec{\\tau} }$",
			"fullName": "Torque",
			"description": "Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis, fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance vector and the force vector, which tends to produce rotation.",
			"units": "$ \\textrm{N}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Torque",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{\\tau} }\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Definition of Torque"]
		},
		"Linear Momentum": {
			"quickName": "p",
			"representation": "$\\displaystyle{ \\vec{p} }$",
			"fullName": "Linear Momentum",
			"description": "In classical mechanics, linear momentum or translational momentum (pl. momenta) is the product of the mass and velocity of an object. For example, a heavy truck moving quickly has a large momentum—it takes a large and prolonged force to get the truck up to this speed, and it takes a large and prolonged force to bring it to a stop afterwards. ",
			"units": "$ \\frac{ \\textrm{kg} \\cdot \\textrm{m} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Momentum",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{p} }\\right)$",
			"unitComposition": ["kilogram", "second", "meter"],
			"equations": ["Definition of Linear Momentum", "Newton's Second Law", "Definition of Angular Momentum"]
		},
		"Impulse": {
			"quickName": "J",
			"representation": "$\\displaystyle{ \\vec{J} }$",
			"fullName": "Impulse",
			"description": "In classical mechanics, impulse is the change in linear momentum of a body. It may be defined or calculated as the product of the average force multiplied by the time over which the force is exerted. Impulse is a vector quantity since it is the result of integrating force, a vector quantity, over time.",
			"units": "$ \\frac{ \\textrm{kg} \\cdot \\textrm{m} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Impulse_(physics)",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{J} }\\right)$",
			"unitComposition": ["kilogram", "second", "meter"],
			"equations": ["Definition of Impulse"]
		},
		"Work": {
			"quickName": "W",
			"representation": "$\\displaystyle{W}$",
			"fullName": "Work",
			"description": "In physics, a force is said to do work when it acts on a body, and there is a displacement of the point of application in the direction of the force. For example, when you lift a suitcase from the floor, the work done on the suitcase is the force it takes to lift it (its weight) times the height that it is lifted.",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Work_(physics)",
			"definitionRepresentation": "$\\left(\\displaystyle{W}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Definition of Work", "Definition of Mechanical Power"]
		},
		"Pi": {
			"quickName": "Pi",
			"representation": "$\\displaystyle{\\pi}$",
			"fullName": "Pi",
			"description": "The number $\\pi$ is a mathematical constant, the ratio of a circle's circumference to its diameter, approximately equal to $3.14159$. It has been represented by the Greek letter \"$\\pi$\" and is also sometimes spelled out as \"pi\".Being an irrational number, π cannot be expressed exactly as a common fraction, although fractions such as 22/7 and other rational numbers are commonly used to approximate π. Consequently its decimal representation never ends and never settles into a permanent repeating pattern. ",
			"units": "",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Pi",
			"definitionRepresentation": "$\\left(\\displaystyle{\\pi}\\right)$",
			"equations": ["Spring Period", "Pendulum Period", "Definition of Coulomb Force"],
			"unitComposition": []
		},
		"Coefficient of Friction": {
			"quickName": "mu",
			"representation": "$\\displaystyle{\\mu}$",
			"fullName": "Coefficient of Friction",
			"description": "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other. ",
			"units": "",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Friction",
			"definitionRepresentation": "$\\left(\\displaystyle{\\mu}\\right)$",
			"equations": ["Force of Friction"],
			"unitComposition": []
		},
		"Kinetic Energy": {
			"quickName": "K",
			"representation": "$\\displaystyle{ K }$",
			"fullName": "Kinetic Energy",
			"description": "In physics, the kinetic energy of an object is the energy which it possesses due to its motion. It is defined as the work needed to accelerate a body of a given mass from rest to its stated velocity. Having gained this energy during its acceleration, the body maintains this kinetic energy unless its speed changes. ",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Kinetic_energy",
			"definitionRepresentation": "$\\left(\\displaystyle{ K }\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Definition of Kinetic Energy", "Work-Energy Theorem"]
		},
		"Net Work": {
			"quickName": "Wnet",
			"representation": "$\\displaystyle{W_{net}}$",
			"fullName": "Net Work",
			"description": "In physics, a force is said to do work when it acts on a body, and there is a displacement of the point of application in the direction of the force. For example, when you lift a suitcase from the floor, the work done on the suitcase is the force it takes to lift it (its weight) times the height that it is lifted.",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Work_(physics)",
			"definitionRepresentation": "$\\left(\\displaystyle{W_{net}}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Work-Energy Theorem"]
		},
		"Period": {
			"quickName": "T",
			"representation": "$\\displaystyle{\\textrm{T}}$",
			"fullName": "Period",
			"description": "The period is the duration of one cycle in a repeating event, so the period is the reciprocal of the frequency. For example, if a newborn baby's heart beats at a frequency of 120 times a minute, its period (the interval between beats) is half a second.",
			"units": "$ \\textrm{s} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Frequency",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{T}}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Definition of Period"]
		},
		"Frequency": {
			"quickName": "f",
			"representation": "$\\displaystyle{f , \\nu}$",
			"fullName": "Frequency",
			"description": "Frequency is the number of occurrences of a repeating event per unit time. It is also referred to as temporal frequency, which emphasizes the contrast to spatial frequency and angular frequency. The period is the duration of one cycle in a repeating event, so the period is the reciprocal of the frequency. ",
			"units": "$\\textrm{Hz}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Frequency",
			"definitionRepresentation": "$\\left(\\displaystyle{f , \\nu}\\right)$",
			"unitComposition": ["Hertz"],
			"equations": ["Definition of Period"]
		},
		"Frictional Force": {
			"quickName": "F_fric",
			"representation": "$\\displaystyle{\\vec{F}_{fric}}$",
			"fullName": "Frictional Force",
			"description": "Friction is the force resisting the relative motion of solid surfaces, fluid layers, and material elements sliding against each other. ",
			"units": "$\\textrm{N}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Friction",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_{fric}}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Force of Friction"]
		},
		"Centripetal Acceleration": {
			"quickName": "a_c",
			"representation": "$\\displaystyle{\\vec{a}_c}$",
			"fullName": "Centripetal Acceleration",
			"description": "Uniform circular motion, that is constant speed along a circular path, is an example of a body experiencing acceleration resulting in velocity of a constant magnitude but change of direction. In this case, because the direction of the object's motion is constantly changing, being tangential to the circle, the object's linear velocity vector also changes, but its speed does not. This acceleration is a radial acceleration since it is always directed toward the centre of the circle.",
			"units": "$ \\frac{ \\textrm{m} }{ \\textrm{s}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Acceleration",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{a}_c}\\right)$",
			"unitComposition": ["second", "meter"],
			"equations": ["Definition of Centripetal Acceleration", "Definition of Centripetal Force"]
		},
		"Electric Dipole Moment": {
			"quickName": "p",
			"representation": "$\\displaystyle{\\vec{p}}$",
			"fullName": "Electric Dipole Moment",
			"description": "In physics, the electric dipole moment is a measure of the separation of positive and negative electrical charges in a system of electric charges, that is, a measure of the charge system's overall polarity.",
			"units": "$ \\textrm{C} \\cdot \\textrm{m} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_dipole_moment",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{p}}\\right)$",
			"unitComposition": ["Coulomb", "meter"],
			"equations": ["Electric Dipole Moment"]
		},
		"Coulomb's Constant": {
			"quickName": "K",
			"representation": "$\\displaystyle{K}$",
			"fullName": "Coulomb's Constant",
			"description": "Coulomb's constant is a handy way of containing the fraction: $\\frac{1}{4\\pi\\epsilon_0}$, which comes up often in equations in electricity and magnetism. It has the numerical value: $ K = 8.99 \\times 10^9 \\frac{ \\textrm{N} \\cdot \\textrm{m}^2}{ \\textrm{C}^2 } $.",
			"units": "$ \\frac{ \\textrm{N} \\cdot \\textrm{m}^2 }{ \\textrm{C}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Coulomb's_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{K}\\right)$",
			"unitComposition": ["Coulomb", "Newton", "meter"],
			"equations": ["Definition of Coulomb Force"]
		},
		"Angle": {
			"quickName": "theta",
			"representation": "$\\displaystyle{\\theta}$",
			"fullName": "Angle",
			"description": "In geometry, an angle is the figure formed by two rays or line segments, called the sides of the angle, sharing a common endpoint, called the vertex of the angle. Angles are usually presumed to be in a Euclidean plane or in the Euclidean space, but are also defined in non-Euclidean geometries. In particular, in spherical geometry, the spherical angles are defined, using arcs of great circles instead of rays.",
			"units": "$\\textrm{rad}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angle",
			"definitionRepresentation": "$\\left(\\displaystyle{\\theta}\\right)$",
			"unitComposition": ["Radian"],
			"equations": ["Definition of Torque", "Normal Force", "Definition of Angular Momentum", "Definition of Mechanical Power", "Definition of Angular Velocity"]
		},
		"Time": {
			"quickName": "t",
			"representation": "$\\displaystyle{t}$",
			"fullName": "Time",
			"description": "Time is one of the seven fundamental physical quantities in both the International System of Units and International System of Quantities. Time is used to define other quantities—such as velocity—so defining time in terms of such quantities would result in circularity of definition. An operational definition of time, wherein one says that observing a certain number of repetitions of one or another standard cyclical event (such as the passage of a free-swinging pendulum) constitutes one standard unit such as the second, is highly useful in the conduct of both advanced experiments and everyday affairs of life. The operational definition leaves aside the question whether there is something called time, apart from the counting activity just mentioned, that flows and that can be measured. Investigations of a single continuum called spacetime bring questions about space into questions about time, questions that have their roots in the works of early students of natural philosophy.",
			"units": "$ \\textrm{ s } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Time",
			"definitionRepresentation": "$\\left(\\displaystyle{t}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Kinematics Equation (no $\\Delta X$)", "Kinematics Equation (no \"$a$\")", "Definition of Mechanical Power", "Definition of Acceleration", "Kinematics Equation (no \"$v_0$\")", "Kinematics Equation (no \"$v$\")", "Time Dilation"]
		},
		"Velocity": {
			"quickName": "v",
			"representation": "$\\displaystyle{\\vec{v}}$",
			"fullName": "Velocity",
			"description": "Velocity is the rate of change of the position of an object, equivalent to a specification of its speed and direction of motion, e.g. 60 km/h to the north. Velocity is an important concept in kinematics, the branch of classical mechanics which describes the motion of bodies.",
			"units": "$ \\frac{ \\textrm{m} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Velocity",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{v}}\\right)$",
			"unitComposition": ["meter", "second"],
			"equations": ["Kinematics Equation (no $\\Delta X$)", "Newton's Second Law", "Kinematics Equation (no \"$a$\")", "Kinematics Equation (no \"$t$\")", "Definition of Centripetal Acceleration", "Definition of Linear Momentum", "Definition of Kinetic Energy", "Definition of Mechanical Power", "Definition of Acceleration", "Kinematics Equation (no \"$v_0$\")", "Kinematics Equation (no \"$v$\")", "Definition of Lorentz Factor"]
		},
		"Normal Force": {
			"quickName": "F_n",
			"representation": "$\\displaystyle{\\vec{F}_n}$",
			"fullName": "Normal Force",
			"description": "In mechanics, the normal force  is the component, perpendicular to the surface (surface being a plane) of contact, of the contact force exerted on an object by, for example, the surface of a floor or wall, preventing the object from penetrating the surface.The normal force is one of the components of the ground reaction force and may coincide with it, for example considering a person standing still on the ground, in which case the ground reaction force reduces to the normal force. In another common situation, if an object hits a surface with some speed, and the surface can withstand it, the normal force provides for a rapid deceleration, which will depend on the flexibility of the surface.",
			"units": "$\\textrm{N}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Normal_force",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_n}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Force of Friction", "Normal Force"]
		},
		"Radius": {
			"quickName": "r",
			"representation": "$\\displaystyle{\\vec{r}}$",
			"fullName": "Radius",
			"description": "In classical geometry, the radius of a circle or sphere is the length of a line segment from its center to its perimeter. The name comes from Latin radius, meaning \"ray\" but also the spoke of a chariot wheel. The plural of radius can be either radii (from the Latin plural) or the conventional English plural radiuses. ",
			"units": "$\\textrm{m}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Radius",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{r}}\\right)$",
			"unitComposition": ["meter"],
			"equations": ["Definition of Centripetal Acceleration", "Definition of Torque", "Pendulum Period", "Newton's Law of Gravitation", "Gravitational Potential", "Definition of Coulomb Force", "Definition of Center of Mass", "Definition of Angular Momentum"]
		},
		"Gravitational Acceleration": {
			"quickName": "g",
			"representation": "$\\displaystyle{ \\vec{g} }$",
			"fullName": "Gravitational Acceleration",
			"description": "In physics, gravitational acceleration is the acceleration on an object caused by force of gravitation. Neglecting friction such as air resistance, all small bodies accelerate in a gravitational field at the same rate relative to the center of mass. This equality is true regardless of the masses or compositions of the bodies.",
			"units": "$ \\frac{ \\textrm{m} }{ \\textrm{s}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Gravitational_acceleration",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{g} }\\right)$",
			"unitComposition": ["meter", "second"],
			"equations": ["Definition of Gravitational Potential Energy", "Pendulum Period", "Normal Force"]
		},
		"Electric Charge": {
			"quickName": "Q",
			"representation": "$\\displaystyle{q}$",
			"fullName": "Electric Charge",
			"description": "Electric charge is the physical property of matter that causes it to experience a force when close to other electrically charged matter. There are two types of electric charges – positive and negative. Positively charged substances are repelled from other positively charged substances, but attracted to negatively charged substances; negatively charged substances are repelled from negative and attracted to positive. ",
			"units": "$ \\textrm{C} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_charge",
			"definitionRepresentation": "$\\left(\\displaystyle{q}\\right)$",
			"unitComposition": ["Coulomb"],
			"equations": ["Definition of Coulomb Force", "Electric Field Strength", "Electric Charge"]
		},
		"Centripetal Force": {
			"quickName": "F_c",
			"representation": "$\\displaystyle{\\vec{F}_c}$",
			"fullName": "Centripetal Force",
			"description": "Centripetal force is a force that makes a body follow a curved path: its direction is always orthogonal to the velocity of the body, toward the fixed point of the instantaneous center of curvature of the path. Centripetal force is generally the cause of circular motion.In simple terms, centripetal force is defined as a force which keeps a body moving with a uniform speed along a circular path and is directed along the radius towards the centre. ",
			"units": "$ \\textrm{N} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Centripetal_force",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_c}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Definition of Centripetal Force"]
		},
		"Electric Field": {
			"quickName": "E",
			"representation": "$\\displaystyle{\\vec{E}}$",
			"fullName": "Electric Field",
			"description": "An electric field is generated by electrically charged particles and time-varying magnetic fields. The electric field describes the electric force experienced by a motionless positively charged test particle at any point in space relative to the source(s) of the field. The concept of an electric field was introduced by Michael Faraday.",
			"units": "$ \\frac{ \\textrm{V} }{ \\textrm{m} } = \\frac{ \\textrm{N} }{ \\textrm{C} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_field",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{E}}\\right)$",
			"unitComposition": ["Newton", "Coulomb", "Volt", "meter"],
			"equations": ["Electric Field Strength"]
		},
		"Electric Force": {
			"quickName": "F_E",
			"representation": "$\\displaystyle{\\vec{F}_E}$",
			"fullName": "Electric Force",
			"description": "Electromagnetism, or the electromagnetic force is one of the four fundamental interactions in nature, the other three being the strong interaction, the weak interaction, and gravitation. This force is described by electromagnetic fields, and has innumerable physical instances including the interaction of electrically charged particles and the interaction of uncharged magnetic force fields with electrical conductors.",
			"units": "$ \\textrm{N} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electromagnetism",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_E}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Definition of Coulomb Force"]
		},
		"Gravitational Potential Energy": {
			"quickName": "U_g",
			"representation": "$\\displaystyle{U_g}$",
			"fullName": "Gravitational Potential Energy",
			"description": "In physics, potential energy is energy stored in a system of forcefully interacting physical entities. Potential energy is associated with forces that act on a body in a way that depends only on the body's position in space. These forces can be represented by a vector at every point in space forming what is known as a vector field of forces, or a force field.",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"definitionRepresentation": "$\\left(\\displaystyle{U_g}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Definition of Gravitational Potential Energy", "Gravitational Potential"]
		},
		"Gravitational Force": {
			"quickName": "F_g",
			"representation": "$\\displaystyle{\\vec{F}_g}$",
			"fullName": "Gravitational Force",
			"description": "Gravitation, or gravity, is a natural phenomenon by which all physical bodies attract each other. It is most commonly recognized and experienced as the agent that gives weight to physical objects, and causes physical objects to fall toward the ground when dropped from a height. In modern physics, gravitation is most accurately described by the general theory of relativity proposed by Einstein, which asserts that the phenomenon of gravitation is a consequence of the curvature of spacetime. ",
			"units": "$ \\textrm{N} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Gravitation",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_g}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Newton's Law of Gravitation"]
		},
		"Potential Energy": {
			"quickName": "U",
			"representation": "$\\displaystyle{U}$",
			"fullName": "Potential Energy",
			"description": "In physics, potential energy is energy stored in a system of forcefully interacting physical entities. Potential energy is associated with forces that act on a body in a way that depends only on the body's position in space. These forces can be represented by a vector at every point in space forming what is known as a vector field of forces, or a force field. Potential energy is often associated with restoring forces such as a spring or the force of gravity.",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"definitionRepresentation": "$\\left(\\displaystyle{U}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Potential Energy"]
		},
		"Pendulum Period": {
			"quickName": "T_pendulum",
			"representation": "$\\displaystyle{T_p}$",
			"fullName": "Pendulum Period",
			"description": "The period of a pendulum describes how long, in seconds, it takes for the bob to make one full cycle and return back to its starting position.",
			"units": "$ \\textrm{s} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Pendulum_(mathematics)",
			"definitionRepresentation": "$\\left(\\displaystyle{T_p}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Pendulum Period"]
		},
		"Spring Constant": {
			"quickName": "k",
			"representation": "$ k = \\frac{ F }{ \\delta }$",
			"fullName": "Spring Constant",
			"description": "Hooke's law is a principle of physics that states that the force  needed to extend or compress a spring by some distance  is proportional by a constant k to that distance. Where, $F$ is the force applied on the body and $\\delta$ is the displacement produced by the force along the same degree of freedom (for instance, the change in length of a stretched spring). This in fact holds (to some extent) in many other situations where an elastic body is deformed, such as wind blowing on a tall building, a musician plucking a string of a guitar, or the filling of a party balloon. ",
			"units": "$ \\frac{ \\textrm{N} }{ m } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Stiffness",
			"definitionRepresentation": "$\\left( k = \\frac{ F }{ \\delta }\\right)$",
			"unitComposition": ["Newton", "meter"],
			"equations": ["Hooke's Law", "Definition of Spring Potential Energy", "Spring Period"]
		},
		"Spring Period": {
			"quickName": "T_spring",
			"representation": "$\\displaystyle{T_s}$",
			"fullName": "Spring Period",
			"description": "The period of a spring defines how long, in seconds, it takes for the spring to go from stretched to compressed and back again when acted upon by some outside force.",
			"units": "$ \\textrm{s} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Spring_physics",
			"definitionRepresentation": "$\\left(\\displaystyle{T_s}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Spring Period"]
		},
		"Spring Force": {
			"quickName": "F_spring",
			"representation": "$\\displaystyle{\\vec{F}_{spring}}$",
			"fullName": "Spring Force",
			"description": "The spring force is defined by Hooke's Law. It is the force that must be exerted on a spring to stretch or compress it some distance x, and the force with which the spring would recoil once released.",
			"units": "$ \\textrm{N} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Hooke%27s_law",
			"definitionRepresentation": "$\\left(\\displaystyle{\\vec{F}_{spring}}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Hooke's Law"]
		},
		"Spring Potential Energy": {
			"quickName": "U_spring",
			"representation": "$\\displaystyle{U_s}$",
			"fullName": "Spring Potential Energy",
			"description": "Potential energy is stored in a spring when it is stretched or compressed away from equilibrium. It is dependent on the distance the spring is moved and the spring constant.",
			"units": "$ \\textrm{J} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Potential_energy",
			"definitionRepresentation": "$\\left(\\displaystyle{U_s}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Definition of Spring Potential Energy"]
		},
		"Coulomb Force": {
			"quickName": "F_coulomb",
			"representation": "$\\displaystyle{F}$",
			"fullName": "Coulomb Force",
			"description": "Coulomb's law, or Coulomb's inverse-square law, is a law of physics describing the electrostatic interaction between electrically charged particles. The law was first published in 1785 by French physicist Charles Augustin de Coulomb and was essential to the development of the theory of electromagnetism. It is analogous to Isaac Newton's inverse-square law of universal gravitation. ",
			"units": "$ \\textrm{N}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Coulomb%27s_law",
			"definitionRepresentation": "$\\left(\\displaystyle{F}\\right)$",
			"unitComposition": ["Newton"],
			"equations": ["Definition of Coulomb Force"]
		},
		"Angular Momentum": {
			"quickName": "L",
			"representation": "$\\displaystyle{ \\vec{L} }$",
			"fullName": "Angular Momentum",
			"description": "In physics, angular momentum, moment of momentum, or rotational momentum is a measure of the amount of rotation an object has, taking into account its mass, shape and speed. It is a vector quantity that represents the product of a body's rotational inertia and rotational velocity about a particular axis.",
			"units": "$ \\textrm{kg} \\cdot \\frac{ \\textrm{m}^2 }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angular_momentum",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{L} }\\right)$",
			"unitComposition": ["kilogram", "second", "meter"],
			"equations": ["Definition of Angular Momentum"]
		},
		"Mechanical Power": {
			"quickName": "P",
			"representation": "$\\displaystyle{\\textrm{P}}$",
			"fullName": "Mechanical Power",
			"description": "In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. The unit of power is the joule per second (J/s) which is equal to the watt. The integral of power over time defines the work performed. Power in mechanical systems is the combination of forces and movement. In particular, power is the product of a force on an object and the object's velocity, or the product of a torque on a shaft and the shaft's angular velocity.",
			"units": "$\\textrm{W}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Power_(physics)",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{P}}\\right)$",
			"unitComposition": ["Watt"],
			"equations": ["Definition of Mechanical Power"]
		},
		"Planck's Constant": {
			"quickName": "h",
			"representation": "$\\displaystyle{\\textrm{h}}$",
			"fullName": "Planck's Constant",
			"description": "The Planck constant (denoted h, also called Planck's constant) is a physical constant that is the quantum of action in quantum mechanics. It originally described the proportionality constant between the energy (E) of a charged atomic oscillator in the wall of a black body, and the frequency ($\\nu$) of its associated electromagnetic wave. It's value is $6.62606957 \\times 10^{-34} J \\cdot s = 4.135667516 \\times 10^{−15} eV \\cdot s$",
			"units": "$ \\textrm{J} \\cdot \\textrm{s} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Planck_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{\\textrm{h}}\\right)$",
			"unitComposition": ["second", "Electron Volt", "Joule"],
			"equations": []
		},
		"Voltage": {
			"quickName": "V",
			"representation": "$\\displaystyle{V}$",
			"fullName": "Voltage",
			"description": "Voltage, electrical potential difference, electric tension or electric pressure (denoted ∆V and measured in units of electric potential: volts, or joules per coulomb) is the electric potential difference between two points, or the difference in electric potential energy of a unit charge transported between two points. Voltage is equal to the work done per unit charge against a static electric field to move the charge between two points. A voltage may represent either a source of energy (electromotive force), or lost, used, or stored energy (potential drop). ",
			"units": "$\\textrm{V}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Voltage",
			"definitionRepresentation": "$\\left(\\displaystyle{V}\\right)$",
			"unitComposition": ["Volt"],
			"equations": ["Ohm's Law"]
		},
		"Angular Velocity": {
			"quickName": "w",
			"representation": "$\\displaystyle{\\omega}$",
			"fullName": "Angular Velocity",
			"description": "Angular velocity is the change in angle per unit time. For a rigid body in constant rotation, the angular velocity is the same for all points on the body. Angular velocity is a vector quantity, and angular speed is the magnitude of this velocity.",
			"units": "$ \\frac{ \\textrm{rad} }{ \\textrm{s} } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angular_velocity",
			"definitionRepresentation": "$\\left(\\displaystyle{\\omega}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Definition of Angular Velocity", "Definition of Angular Momentum"]
		},
		"Rotational Inertia": {
			"quickName": "I",
			"representation": "$\\displaystyle{I}$",
			"fullName": "Rotational Inertia",
			"description": "Moment of inertia is the mass property of a rigid body that defines the torque needed for a desired angular acceleration about an axis of rotation. Moment of inertia depends on the shape of the body and may be different around different axes of rotation. A larger moment of inertia around a given axis requires more torque to increase the rotation, or to stop the rotation, of a body about that axis. ",
			"units": "$ \\textrm{kg} \\cdot \\textrm{m}^2 $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Moment_of_inertia",
			"definitionRepresentation": "$\\left(\\displaystyle{I}\\right)$",
			"unitComposition": ["kilogram", "meter"],
			"equations": ["Definition of Torque"]
		},
		"Center of Mass": {
			"quickName": "r_cm",
			"representation": "$\\displaystyle{ \\vec{r}_{cm} }$",
			"fullName": "Center of Mass",
			"description": "In physics, the center of mass of a distribution of mass in space is the unique point where the weighted relative position of the distributed mass sums to zero. The distribution of mass is balanced around the center of mass and the average of the weighted position coordinates of the distributed mass defines its coordinates. Calculations in mechanics are often simplified when formulated with respect to the center of mass.",
			"units": "$ \\textrm{m} $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Center_of_mass",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\vec{r}_{cm} }\\right)$",
			"unitComposition": ["meter"],
			"equations": ["Definition of Center of Mass"]
		},
		"Angular Acceleration": {
			"quickName": "a",
			"representation": "$\\displaystyle{ \\alpha =\\frac{d\\omega}{dt}=\\frac{d^{2}\\theta}{dt^{2}} }=\\frac{a_T}{r}$",
			"fullName": "Angular Acceleration",
			"description": "Angular acceleration is the rate of change of angular velocity. Where ${\\omega}$ is the angular velocity, $a_T$ is the linear tangential acceleration, and r, (usually defined as the radius of the circular path of which a point moving along), is the distance from the origin of the coordinate system that defines $\\theta$ and $\\omega$ to the point of interest.",
			"units": "$ \\frac{ \\textrm{rad} }{ \\textrm{s}^2 } $",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Angular_acceleration",
			"definitionRepresentation": "$\\left(\\displaystyle{ \\alpha =\\frac{d\\omega}{dt}=\\frac{d^{2}\\theta}{dt^{2}} }=\\frac{a_T}{r}\\right)$",
			"unitComposition": ["second"],
			"equations": ["Definition of Torque"]
		},
		"Magnetic Field": {
			"quickName": "B",
			"representation": "$\\displaystyle{B}$",
			"fullName": "Magnetic Field",
			"description": "A magnetic field is the magnetic influence of electric currents and magnetic materials. The magnetic field at any given point is specified by both a direction and a magnitude (or strength); as such it is a vector field. The term is used for two distinct but closely related fields denoted by the symbols B and H, which are measured in units of tesla and amp per meter respectively in the SI.",
			"units": "$T$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Magnetic_field",
			"definitionRepresentation": "$\\left(\\displaystyle{B}\\right)$",
			"unitComposition": ["Tesla"],
			"equations": []
		},
		"Energy": {
			"quickName": "E",
			"representation": "$\\displaystyle{E}$",
			"fullName": "Energy",
			"description": "In physics, energy is a property of objects, transferable among them via fundamental interactions, which can be converted in form but not created or destroyed. The joule is the SI unit of energy, based on the amount transferred to an object by the mechanical work of moving it 1 metre against a force of 1 newton.Work and heat are two categories of processes or mechanisms that can transfer a given amount of energy.",
			"units": "$J$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Energy",
			"definitionRepresentation": "$\\left(\\displaystyle{E}\\right)$",
			"unitComposition": ["Joule"],
			"equations": ["Mass–Energy Equivalence"]
		},
		"Electric Current": {
			"quickName": "i",
			"representation": "$\\displaystyle{I}$",
			"fullName": "Electric Current",
			"description": "An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. The SI unit for measuring an electric current is the ampere, which is the flow of electric charge across a surface at the rate of one coulomb per second. Electric currents can have many effects, notably heating, but they also create magnetic fields, which are used in motors, inductors and generators.",
			"units": "$A$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electric_current",
			"definitionRepresentation": "$\\left(\\displaystyle{I}\\right)$",
			"unitComposition": ["Ampere"],
			"equations": ["Ohm's Law"]
		},
		"Electric Resistance": {
			"quickName": "R",
			"representation": "$\\displaystyle{R}$",
			"fullName": "Electric Resistance",
			"description": "The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor. Electrical resistance shares some conceptual parallels with the mechanical notion of friction. An object of uniform cross section has a resistance proportional to its resistivity and length and inversely proportional to its cross-sectional area. All materials show some resistance, except for superconductors, which have a resistance of zero.",
			"units": "$\\Omega$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electrical_resistance_and_conductance",
			"definitionRepresentation": "$\\left(\\displaystyle{R}\\right)$",
			"unitComposition": ["Ohm"],
			"equations": ["Pouillet's law", "Ohm's Law"]
		},
		"Cross Section": {
			"quickName": "A",
			"representation": "$\\displaystyle{A}$",
			"fullName": "Cross Section",
			"description": "In geometry and science, a cross section is the intersection of a body in three-dimensional space with a plane, or the analog in higher-dimensional space. When cutting an object into slices, one gets many parallel cross sections. A cross section of three-dimensional space that is parallel to two of the axes is a contour line.",
			"units": "$m^2$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Cross_section_(geometry)",
			"definitionRepresentation": "$\\left(\\displaystyle{A}\\right)$",
			"unitComposition": ["meter"],
			"equations": ["Pouillet's law"]
		},
		"Electrical Resistivity": {
			"quickName": "resistivity",
			"representation": "$\\displaystyle{\\rho}$",
			"fullName": "Electrical Resistivity",
			"description": "Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is an intrinsic property that quantifies how strongly a given material opposes the flow of electric current. A low resistivity indicates a material that readily allows the movement of electric charge. Resistivity is commonly represented by the Greek letter $\\rho$ (rho). The SI unit of electrical resistivity is the ohm⋅meter ($\\Omega \\cdot m$). As an example, if a 1 m × 1 m × 1 m solid cube of material has sheet contacts on two opposite faces, and the resistance between these contacts is 1 Ω, then the resistivity of the material is 1 Ω⋅m.",
			"units": "$\\Omega \\cdot m$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity",
			"definitionRepresentation": "$\\left(\\displaystyle{\\rho}\\right)$",
			"unitComposition": ["Ohm", "meter"],
			"equations": ["Pouillet's law"]
		},
		"Length": {
			"quickName": "l",
			"representation": "$\\displaystyle{L}$",
			"fullName": "Length",
			"description": "In geometric measurements, length is the longest dimension of an object. In the International System of Quantities, length is any quantity with dimension distance. In other contexts \"length\" is the measured dimension of an object.",
			"units": "$m$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Length",
			"definitionRepresentation": "$\\left(\\displaystyle{L}\\right)$",
			"unitComposition": ["meter"],
			"equations": ["Pouillet's law"]
		},
		"Capacitance": {
			"quickName": "C",
			"representation": "$\\displaystyle{C}$",
			"fullName": "Capacitance",
			"description": "Capacitance is the ability of a body to store an electrical charge. Any object that can be electrically charged exhibits capacitance. A common form of energy storage device is a parallel-plate capacitor. In a parallel plate capacitor, capacitance is directly proportional to the surface area of the conductor plates and inversely proportional to the separation distance between the plates. If the charges on the plates are +q and −q respectively, and V gives the voltage between the plates, then the capacitance C is given by $C = \\frac{q}{V}$. Which gives the voltage/current relationship $I(t) = C \\frac{\\mathrm{d}V(t)}{\\mathrm{d}t}$.",
			"units": "$F$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Capacitance",
			"definitionRepresentation": "$\\left(\\displaystyle{C}\\right)$",
			"unitComposition": ["Farad"],
			"equations": []
		},
		"Molar Gas Constant": {
			"quickName": "R",
			"representation": "$\\displaystyle{R}$",
			"fullName": "Molar Gas Constant",
			"description": "The gas constant (also known as the molar, universal, or ideal gas constant, denoted by the symbol R or R) is a physical constant which is featured in many fundamental equations in the physical sciences, such as the ideal gas law and the Nernst equation. It is equivalent to the Boltzmann constant, but expressed in units of energy (i.e. the pressure-volume product) per temperature increment per mole (rather than energy per temperature increment per particle).Physically, the gas constant is the constant of proportionality that happens to relate the energy scale in physics to the temperature scale, when a mole of particles at the stated temperature is being considered. The gas constant value is $8.3144621 \\frac{J}{mol \\cdot K}$",
			"units": "$\\frac{J}{mol \\cdot K}$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Gas_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{R}\\right)$",
			"unitComposition": ["mole", "Kelvin", "Joule"],
			"equations": []
		},
		"Reduced Planck's Constant": {
			"quickName": "h_bar",
			"representation": "$\\displaystyle{\\hbar}$",
			"fullName": "Reduced Planck's Constant",
			"description": "The Planck constant (denoted h, also called Planck's constant) is a physical constant that is the quantum of action in quantum mechanics. In applications where it is natural to use the angular frequency (i.e. where the frequency is expressed in terms of radians per second instead of rotations per second or Hertz) it is often useful to absorb a factor of 2π into the Planck constant. The resulting constant is called the reduced Planck constant or Dirac constant. It is represented as $\\hbar = \\frac{h}{2\\pi}$.",
			"units": "$J \\cdot s$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Planck_constant",
			"definitionRepresentation": "$\\left(\\displaystyle{\\hbar}\\right)$",
			"unitComposition": ["second", "Joule"],
			"equations": []
		},
		"Inductance": {
			"quickName": "L",
			"representation": "$L$",
			"fullName": "Inductance",
			"description": "In electromagnetism and electronics, inductance is the property of a conductor by which a change in current flowing through it \"induces\" (creates) a voltage (electromotive force) in both the conductor itself (self-inductance) and in any nearby conductors (mutual inductance).These effects are derived from two fundamental observations of physics: First, that a steady current creates a steady magnetic field (Oersted's law), and second, that a time-varying magnetic field induces voltage in nearby conductors (Faraday's law of induction). According to Lenz's law, a changing electric current through a circuit that contains inductance, induces a proportional voltage, which opposes the change in current (self-inductance).",
			"units": "$H$",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Inductance",
			"definitionRepresentation": "$\\left(L\\right)$",
			"unitComposition": ["Henry"],
			"equations": []
		},
		"Lorentz Factor": {
			"quickName": "gamma",
			"representation": "$\\displaystyle{\\gamma}$",
			"fullName": "Lorentz Factor",
			"description": "The Lorentz factor or Lorentz term is an expression which appears in several equations in special relativity. It arises from deriving the Lorentz transformations. The name originates from its earlier appearance in Lorentzian electrodynamics – named after the Dutch physicist Hendrik Lorentz.",
			"units": "none",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Lorentz_factor",
			"definitionRepresentation": "$\\left(\\displaystyle{\\gamma}\\right)$",
			"equations": ["Definition of Lorentz Factor", "Time Dilation", "Length Contraction"],
			"unitComposition": []
		},
		"Velocity to Speed of Light Ratio": {
			"quickName": "B",
			"representation": "$\\displaystyle{\\beta}$",
			"fullName": "Velocity to Speed of Light Ratio",
			"description": "$\\beta$ is the ratio of v to the speed of light c.",
			"units": "none",
			"descriptionUrl": "http://en.wikipedia.org/wiki/Lorentz_factor",
			"definitionRepresentation": "$\\left(\\displaystyle{\\beta}\\right)$",
			"equations": ["Definition of Lorentz Factor"],
			"unitComposition": []
		}
	},
	"searchTerms": {
		"meter": [{
			"type": "unit",
			"fullName": "meter"
		}],
		"m": [{
			"type": "unit",
			"fullName": "meter"
		}, {
			"type": "variable",
			"fullName": "Mass"
		}, {
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}],
		"metre": [{
			"type": "unit",
			"fullName": "meter"
		}],
		"length": [{
			"type": "unit",
			"fullName": "meter"
		}, {
			"type": "variable",
			"fullName": "Position"
		}],
		"kilogram": [{
			"type": "unit",
			"fullName": "kilogram"
		}],
		"kg": [{
			"type": "unit",
			"fullName": "kilogram"
		}, {
			"type": "variable",
			"fullName": "Mass"
		}],
		"second": [{
			"type": "unit",
			"fullName": "second"
		}],
		"s": [{
			"type": "unit",
			"fullName": "second"
		}, {
			"type": "variable",
			"fullName": "Time"
		}],
		"mole": [{
			"type": "unit",
			"fullName": "mole"
		}],
		"mol": [{
			"type": "unit",
			"fullName": "mole"
		}],
		"Kelvin": [{
			"type": "unit",
			"fullName": "Kelvin"
		}],
		"K": [{
			"type": "unit",
			"fullName": "Kelvin"
		}, {
			"type": "equation",
			"fullName": "Definition of Kinetic Energy"
		}, {
			"type": "variable",
			"fullName": "Boltzmann Constant"
		}, {
			"type": "variable",
			"fullName": "Kinetic Energy"
		}, {
			"type": "variable",
			"fullName": "Coulomb's Constant"
		}, {
			"type": "variable",
			"fullName": "Spring Constant"
		}],
		"degrees": [{
			"type": "unit",
			"fullName": "Kelvin"
		}, {
			"type": "unit",
			"fullName": "Celsius"
		}],
		"kevin": [{
			"type": "unit",
			"fullName": "Kelvin"
		}],
		"Celsius": [{
			"type": "unit",
			"fullName": "Celsius"
		}],
		"C": [{
			"type": "unit",
			"fullName": "Celsius"
		}, {
			"type": "unit",
			"fullName": "Coulomb"
		}, {
			"type": "variable",
			"fullName": "Speed of Light"
		}, {
			"type": "variable",
			"fullName": "Capacitance"
		}],
		"centigrade": [{
			"type": "unit",
			"fullName": "Celsius"
		}],
		"Ampere": [{
			"type": "unit",
			"fullName": "Ampere"
		}],
		"A": [{
			"type": "unit",
			"fullName": "Ampere"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}, {
			"type": "variable",
			"fullName": "Angular Acceleration"
		}, {
			"type": "variable",
			"fullName": "Cross Section"
		}],
		"Joule": [{
			"type": "unit",
			"fullName": "Joule"
		}],
		"J": [{
			"type": "unit",
			"fullName": "Joule"
		}, {
			"type": "equation",
			"fullName": "Definition of Impulse"
		}, {
			"type": "variable",
			"fullName": "Impulse"
		}],
		"Newton": [{
			"type": "unit",
			"fullName": "Newton"
		}],
		"N": [{
			"type": "unit",
			"fullName": "Newton"
		}],
		"Coulomb": [{
			"type": "unit",
			"fullName": "Coulomb"
		}],
		"charge": [{
			"type": "unit",
			"fullName": "Coulomb"
		}],
		"Volt": [{
			"type": "unit",
			"fullName": "Volt"
		}],
		"V": [{
			"type": "unit",
			"fullName": "Volt"
		}, {
			"type": "variable",
			"fullName": "Velocity"
		}, {
			"type": "variable",
			"fullName": "Voltage"
		}],
		"voltage": [{
			"type": "unit",
			"fullName": "Volt"
		}, {
			"type": "equation",
			"fullName": "Ohm's Law"
		}, {
			"type": "variable",
			"fullName": "Voltage"
		}],
		"potential difference": [{
			"type": "unit",
			"fullName": "Volt"
		}],
		"potential": [{
			"type": "unit",
			"fullName": "Volt"
		}],
		"emf": [{
			"type": "unit",
			"fullName": "Volt"
		}],
		"electromotive force": [{
			"type": "unit",
			"fullName": "Volt"
		}],
		"Henry": [{
			"type": "unit",
			"fullName": "Henry"
		}],
		"H": [{
			"type": "unit",
			"fullName": "Henry"
		}, {
			"type": "variable",
			"fullName": "Planck's Constant"
		}],
		"Ohm": [{
			"type": "unit",
			"fullName": "Ohm"
		}],
		"omega": [{
			"type": "unit",
			"fullName": "Ohm"
		}],
		"resistance": [{
			"type": "unit",
			"fullName": "Ohm"
		}, {
			"type": "equation",
			"fullName": "Ohm's Law"
		}, {
			"type": "equation",
			"fullName": "Pouillet's law"
		}],
		"Hertz": [{
			"type": "unit",
			"fullName": "Hertz"
		}],
		"Hz": [{
			"type": "unit",
			"fullName": "Hertz"
		}],
		"Pascal": [{
			"type": "unit",
			"fullName": "Pascal"
		}],
		"Pa": [{
			"type": "unit",
			"fullName": "Pascal"
		}],
		"Tesla": [{
			"type": "unit",
			"fullName": "Tesla"
		}],
		"T": [{
			"type": "unit",
			"fullName": "Tesla"
		}, {
			"type": "variable",
			"fullName": "Torque"
		}, {
			"type": "variable",
			"fullName": "Period"
		}, {
			"type": "variable",
			"fullName": "Time"
		}],
		"Radian": [{
			"type": "unit",
			"fullName": "Radian"
		}],
		"rad": [{
			"type": "unit",
			"fullName": "Radian"
		}, {
			"type": "variable",
			"fullName": "Angle"
		}],
		"Angle": [{
			"type": "unit",
			"fullName": "Radian"
		}, {
			"type": "variable",
			"fullName": "Angle"
		}],
		"Farad": [{
			"type": "unit",
			"fullName": "Farad"
		}],
		"f": [{
			"type": "unit",
			"fullName": "Farad"
		}, {
			"type": "equation",
			"fullName": "Newton's Second Law"
		}, {
			"type": "variable",
			"fullName": "Force"
		}, {
			"type": "variable",
			"fullName": "Frequency"
		}],
		"Watt": [{
			"type": "unit",
			"fullName": "Watt"
		}],
		"W": [{
			"type": "unit",
			"fullName": "Watt"
		}, {
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Work"
		}, {
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"Power": [{
			"type": "unit",
			"fullName": "Watt"
		}, {
			"type": "equation",
			"fullName": "Definition of Mechanical Power"
		}],
		"Electron Volt": [{
			"type": "unit",
			"fullName": "Electron Volt"
		}],
		"eV": [{
			"type": "unit",
			"fullName": "Electron Volt"
		}],
		"Force": [{
			"type": "equation",
			"fullName": "Newton's Second Law"
		}, {
			"type": "equation",
			"fullName": "Newton's Law of Gravitation"
		}, {
			"type": "variable",
			"fullName": "Force"
		}],
		"Mass": [{
			"type": "variable",
			"fullName": "Mass"
		}],
		"g": [{
			"type": "variable",
			"fullName": "Mass"
		}, {
			"type": "variable",
			"fullName": "Newtonian Gravitational Constant"
		}, {
			"type": "variable",
			"fullName": "Gravitational Acceleration"
		}],
		"lb": [{
			"type": "variable",
			"fullName": "Mass"
		}],
		"weight": [{
			"type": "variable",
			"fullName": "Mass"
		}],
		"Position": [{
			"type": "variable",
			"fullName": "Position"
		}],
		"x": [{
			"type": "variable",
			"fullName": "Position"
		}],
		"distance": [{
			"type": "variable",
			"fullName": "Position"
		}],
		"Speed of Light": [{
			"type": "variable",
			"fullName": "Speed of Light"
		}],
		"lightspeed": [{
			"type": "variable",
			"fullName": "Speed of Light"
		}],
		"Newtonian Gravitational Constant": [{
			"type": "variable",
			"fullName": "Newtonian Gravitational Constant"
		}],
		"Avogadro's Number": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"N_A": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avogadro's constant": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avogadro": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avocado": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"Electric Constant": [{
			"type": "variable",
			"fullName": "Electric Constant"
		}],
		"e_0": [{
			"type": "variable",
			"fullName": "Electric Constant"
		}],
		"e": [{
			"type": "variable",
			"fullName": "Electric Constant"
		}, {
			"type": "variable",
			"fullName": "Elementary Charge"
		}, {
			"type": "variable",
			"fullName": "Electric Field"
		}],
		"e0": [{
			"type": "variable",
			"fullName": "Electric Constant"
		}],
		"Magnetic Constant (permeability of free space)": [{
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}],
		"mu_0": [{
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}],
		"mu": [{
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}, {
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"mu0": [{
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}],
		"m0": [{
			"type": "variable",
			"fullName": "Magnetic Constant (permeability of free space)"
		}],
		"Boltzmann Constant": [{
			"type": "variable",
			"fullName": "Boltzmann Constant"
		}],
		"boltz constant": [{
			"type": "variable",
			"fullName": "Boltzmann Constant"
		}],
		"Elementary Charge": [{
			"type": "variable",
			"fullName": "Elementary Charge"
		}],
		"electron charge": [{
			"type": "variable",
			"fullName": "Elementary Charge"
		}],
		"proton charge": [{
			"type": "variable",
			"fullName": "Elementary Charge"
		}],
		"Electron Mass": [{
			"type": "variable",
			"fullName": "Electron Mass"
		}],
		"me": [{
			"type": "variable",
			"fullName": "Electron Mass"
		}],
		"mass of electron": [{
			"type": "variable",
			"fullName": "Electron Mass"
		}],
		"Proton Mass": [{
			"type": "variable",
			"fullName": "Proton Mass"
		}],
		"mp": [{
			"type": "variable",
			"fullName": "Proton Mass"
		}],
		"mass of proton": [{
			"type": "variable",
			"fullName": "Proton Mass"
		}],
		"Acceleration": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"dv/dt": [{
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"dx^2/dt^2": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"vdot": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"xdotdot": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"xdoubledot": [{
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"v.": [{
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"x..": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}, {
			"type": "variable",
			"fullName": "Acceleration"
		}],
		"Torque": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}, {
			"type": "variable",
			"fullName": "Torque"
		}],
		"tau": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}, {
			"type": "variable",
			"fullName": "Torque"
		}],
		"tork": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}, {
			"type": "variable",
			"fullName": "Torque"
		}],
		"Linear Momentum": [{
			"type": "variable",
			"fullName": "Linear Momentum"
		}],
		"p": [{
			"type": "equation",
			"fullName": "Definition of Linear Momentum"
		}, {
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}, {
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Linear Momentum"
		}, {
			"type": "variable",
			"fullName": "Electric Dipole Moment"
		}, {
			"type": "variable",
			"fullName": "Mechanical Power"
		}],
		"mv": [{
			"type": "equation",
			"fullName": "Definition of Linear Momentum"
		}, {
			"type": "variable",
			"fullName": "Linear Momentum"
		}],
		"momentum": [{
			"type": "variable",
			"fullName": "Linear Momentum"
		}],
		"Impulse": [{
			"type": "equation",
			"fullName": "Definition of Impulse"
		}, {
			"type": "variable",
			"fullName": "Impulse"
		}],
		"dp": [{
			"type": "variable",
			"fullName": "Impulse"
		}],
		"deltap": [{
			"type": "variable",
			"fullName": "Impulse"
		}],
		"delta p": [{
			"type": "variable",
			"fullName": "Impulse"
		}],
		"Work": [{
			"type": "equation",
			"fullName": "Work-Energy Theorem"
		}, {
			"type": "variable",
			"fullName": "Work"
		}],
		"Pi": [{
			"type": "variable",
			"fullName": "Pi"
		}, {
			"type": "variable",
			"fullName": "Angle"
		}],
		"Coefficient of Friction": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"mew": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"moo": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"frictional coefficient": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"friction": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"static friction": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"kinetic friction": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"moving friction": [{
			"type": "variable",
			"fullName": "Coefficient of Friction"
		}],
		"Kinetic Energy": [{
			"type": "variable",
			"fullName": "Kinetic Energy"
		}],
		"KE": [{
			"type": "equation",
			"fullName": "Definition of Kinetic Energy"
		}, {
			"type": "variable",
			"fullName": "Kinetic Energy"
		}],
		"energy of motion": [{
			"type": "variable",
			"fullName": "Kinetic Energy"
		}],
		"motion": [{
			"type": "variable",
			"fullName": "Kinetic Energy"
		}],
		"mv^2": [{
			"type": "variable",
			"fullName": "Kinetic Energy"
		}],
		"Net Work": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"Wnet": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"delta K": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"change in energy": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"dK": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"deltaK": [{
			"type": "variable",
			"fullName": "Net Work"
		}],
		"Period": [{
			"type": "equation",
			"fullName": "Definition of Period"
		}, {
			"type": "variable",
			"fullName": "Period"
		}],
		"1/f": [{
			"type": "variable",
			"fullName": "Period"
		}, {
			"type": "variable",
			"fullName": "Pendulum Period"
		}, {
			"type": "variable",
			"fullName": "Spring Period"
		}],
		"Frequency": [{
			"type": "variable",
			"fullName": "Frequency"
		}],
		"1/t": [{
			"type": "variable",
			"fullName": "Frequency"
		}],
		"Frictional Force": [{
			"type": "variable",
			"fullName": "Frictional Force"
		}],
		"F_fric": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}, {
			"type": "variable",
			"fullName": "Frictional Force"
		}],
		"muFn": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}, {
			"type": "variable",
			"fullName": "Frictional Force"
		}],
		"mewFn": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}, {
			"type": "variable",
			"fullName": "Frictional Force"
		}],
		"Centripetal Acceleration": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Acceleration"
		}, {
			"type": "variable",
			"fullName": "Centripetal Acceleration"
		}],
		"a_c": [{
			"type": "variable",
			"fullName": "Centripetal Acceleration"
		}],
		"centrifugal acceleration": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Acceleration"
		}, {
			"type": "variable",
			"fullName": "Centripetal Acceleration"
		}],
		"Electric Dipole Moment": [{
			"type": "equation",
			"fullName": "Electric Dipole Moment"
		}, {
			"type": "variable",
			"fullName": "Electric Dipole Moment"
		}],
		"Coulomb's Constant": [{
			"type": "variable",
			"fullName": "Coulomb's Constant"
		}],
		"1/4pie0": [{
			"type": "variable",
			"fullName": "Coulomb's Constant"
		}],
		"1/4piepsilon0": [{
			"type": "variable",
			"fullName": "Coulomb's Constant"
		}],
		"theta": [{
			"type": "variable",
			"fullName": "Angle"
		}],
		"degree": [{
			"type": "variable",
			"fullName": "Angle"
		}],
		"Time": [{
			"type": "variable",
			"fullName": "Time"
		}],
		"seconds": [{
			"type": "variable",
			"fullName": "Time"
		}],
		"Velocity": [{
			"type": "variable",
			"fullName": "Velocity"
		}],
		"speed": [{
			"type": "variable",
			"fullName": "Velocity"
		}],
		"Normal Force": [{
			"type": "equation",
			"fullName": "Normal Force"
		}, {
			"type": "variable",
			"fullName": "Normal Force"
		}],
		"F_n": [{
			"type": "variable",
			"fullName": "Normal Force"
		}],
		"Radius": [{
			"type": "variable",
			"fullName": "Radius"
		}],
		"r": [{
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Radius"
		}],
		"diameter": [{
			"type": "variable",
			"fullName": "Radius"
		}],
		"Gravitational Acceleration": [{
			"type": "variable",
			"fullName": "Gravitational Acceleration"
		}],
		"gravity": [{
			"type": "variable",
			"fullName": "Gravitational Acceleration"
		}],
		"Electric Charge": [{
			"type": "equation",
			"fullName": "Electric Charge"
		}, {
			"type": "variable",
			"fullName": "Electric Charge"
		}],
		"Q": [{
			"type": "variable",
			"fullName": "Electric Charge"
		}],
		"Centripetal Force": [{
			"type": "variable",
			"fullName": "Centripetal Force"
		}],
		"F_c": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}, {
			"type": "variable",
			"fullName": "Centripetal Force"
		}],
		"centrifugal force": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}, {
			"type": "variable",
			"fullName": "Centripetal Force"
		}],
		"Electric Field": [{
			"type": "variable",
			"fullName": "Electric Field"
		}],
		"Electric Force": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}, {
			"type": "variable",
			"fullName": "Electric Force"
		}],
		"F_E": [{
			"type": "variable",
			"fullName": "Electric Force"
		}],
		"Gravitational Potential Energy": [{
			"type": "variable",
			"fullName": "Gravitational Potential Energy"
		}],
		"U_g": [{
			"type": "variable",
			"fullName": "Gravitational Potential Energy"
		}],
		"Gravitational Force": [{
			"type": "variable",
			"fullName": "Gravitational Force"
		}],
		"F_g": [{
			"type": "variable",
			"fullName": "Gravitational Force"
		}],
		"Potential Energy": [{
			"type": "equation",
			"fullName": "Potential Energy"
		}, {
			"type": "variable",
			"fullName": "Potential Energy"
		}],
		"U": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}, {
			"type": "equation",
			"fullName": "Gravitational Potential"
		}, {
			"type": "variable",
			"fullName": "Potential Energy"
		}],
		"Pendulum Period": [{
			"type": "equation",
			"fullName": "Pendulum Period"
		}, {
			"type": "variable",
			"fullName": "Pendulum Period"
		}],
		"T_pendulum": [{
			"type": "variable",
			"fullName": "Pendulum Period"
		}],
		"Spring Constant": [{
			"type": "variable",
			"fullName": "Spring Constant"
		}],
		"Spring Period": [{
			"type": "equation",
			"fullName": "Spring Period"
		}, {
			"type": "variable",
			"fullName": "Spring Period"
		}],
		"T_spring": [{
			"type": "variable",
			"fullName": "Spring Period"
		}],
		"Spring Force": [{
			"type": "equation",
			"fullName": "Hooke's Law"
		}, {
			"type": "variable",
			"fullName": "Spring Force"
		}],
		"F_spring": [{
			"type": "variable",
			"fullName": "Spring Force"
		}],
		"Spring Potential Energy": [{
			"type": "variable",
			"fullName": "Spring Potential Energy"
		}],
		"U_spring": [{
			"type": "variable",
			"fullName": "Spring Potential Energy"
		}],
		"Coulomb Force": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}, {
			"type": "variable",
			"fullName": "Coulomb Force"
		}],
		"F_coulomb": [{
			"type": "variable",
			"fullName": "Coulomb Force"
		}],
		"Angular Momentum": [{
			"type": "variable",
			"fullName": "Angular Momentum"
		}],
		"L": [{
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Inductance"
		}],
		"Mechanical Power": [{
			"type": "equation",
			"fullName": "Definition of Mechanical Power"
		}, {
			"type": "variable",
			"fullName": "Mechanical Power"
		}],
		"Planck's Constant": [{
			"type": "variable",
			"fullName": "Planck's Constant"
		}],
		"plank's constant": [{
			"type": "variable",
			"fullName": "Planck's Constant"
		}],
		"electric potential difference": [{
			"type": "variable",
			"fullName": "Voltage"
		}],
		"Angular Velocity": [{
			"type": "equation",
			"fullName": "Definition of Angular Velocity"
		}, {
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"Definition of Angular Velocity": [{
			"type": "equation",
			"fullName": "Definition of Angular Velocity"
		}],
		"angular speed": [{
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"rotational speed": [{
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"rotation": [{
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"Rotational Inertia": [{
			"type": "variable",
			"fullName": "Rotational Inertia"
		}],
		"I": [{
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}, {
			"type": "variable",
			"fullName": "Rotational Inertia"
		}],
		"moment of inertia": [{
			"type": "variable",
			"fullName": "Rotational Inertia"
		}],
		"Center of Mass": [{
			"type": "variable",
			"fullName": "Center of Mass"
		}],
		"r_cm": [{
			"type": "equation",
			"fullName": "Definition of Center of Mass"
		}, {
			"type": "variable",
			"fullName": "Center of Mass"
		}],
		"x_cm": [{
			"type": "variable",
			"fullName": "Center of Mass"
		}],
		"Angular Acceleration": [{
			"type": "variable",
			"fullName": "Angular Acceleration"
		}],
		"alpha": [{
			"type": "variable",
			"fullName": "Angular Acceleration"
		}],
		"dw/dt": [{
			"type": "variable",
			"fullName": "Angular Acceleration"
		}],
		"domega/dt": [{
			"type": "variable",
			"fullName": "Angular Acceleration"
		}],
		"v=v0+at": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no $\\Delta X$)"
		}],
		"kinematics": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no $\\Delta X$)"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$t$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v_0$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"kinematic equation": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no $\\Delta X$)"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$t$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v_0$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"Newton's Second Law": [{
			"type": "equation",
			"fullName": "Newton's Second Law"
		}],
		"f=ma": [{
			"type": "equation",
			"fullName": "Newton's Second Law"
		}],
		"Position with Constant Acceleration": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}],
		"x=(x_0)+(v_0)*t+0.5a*(t^2)": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}],
		"kinematic": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$t$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v_0$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"v^2=(v_0^2)+2a*(x-x_0)": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$t$\")"
		}],
		"Force of Friction": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}],
		"F_fric=muF_n": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}],
		"muF_n": [{
			"type": "equation",
			"fullName": "Force of Friction"
		}],
		"a_c=(v^2)/r": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Acceleration"
		}],
		"centripital acceleration": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Acceleration"
		}],
		"Tau=rxf": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}],
		"rxf": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}],
		"r x f": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}],
		" rfsintheta": [{
			"type": "equation",
			"fullName": "Definition of Torque"
		}],
		"Definition of Linear Momentum": [{
			"type": "equation",
			"fullName": "Definition of Linear Momentum"
		}],
		"p=mv": [{
			"type": "equation",
			"fullName": "Definition of Linear Momentum"
		}],
		"J=int(F)dt": [{
			"type": "equation",
			"fullName": "Definition of Impulse"
		}],
		"intF": [{
			"type": "equation",
			"fullName": "Definition of Impulse"
		}],
		"Definition of Kinetic Energy": [{
			"type": "equation",
			"fullName": "Definition of Kinetic Energy"
		}],
		"K=0.5(mv^2)": [{
			"type": "equation",
			"fullName": "Definition of Kinetic Energy"
		}],
		"Definition of Gravitational Potential Energy": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}],
		"U=mgh": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}],
		"Ug": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}, {
			"type": "equation",
			"fullName": "Gravitational Potential"
		}],
		"PE": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}],
		"Pg": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}],
		"PEg": [{
			"type": "equation",
			"fullName": "Definition of Gravitational Potential Energy"
		}],
		"Definition of Work": [{
			"type": "equation",
			"fullName": "Definition of Work"
		}],
		"W=int(f)dx": [{
			"type": "equation",
			"fullName": "Definition of Work"
		}],
		"Hooke's Law": [{
			"type": "equation",
			"fullName": "Hooke's Law"
		}],
		"F_spring=-kx": [{
			"type": "equation",
			"fullName": "Hooke's Law"
		}],
		"Definition of Spring Potential Energy": [{
			"type": "equation",
			"fullName": "Definition of Spring Potential Energy"
		}],
		"U_spring=0.5k(x^2)": [{
			"type": "equation",
			"fullName": "Definition of Spring Potential Energy"
		}],
		"spring work": [{
			"type": "equation",
			"fullName": "Definition of Spring Potential Energy"
		}],
		"work done by spring": [{
			"type": "equation",
			"fullName": "Definition of Spring Potential Energy"
		}],
		"T_spring=2pi(sqrt(m/k))": [{
			"type": "equation",
			"fullName": "Spring Period"
		}],
		"T_pendulum=2pi(sqrt(l/g))": [{
			"type": "equation",
			"fullName": "Pendulum Period"
		}],
		"T=1/(freq)": [{
			"type": "equation",
			"fullName": "Definition of Period"
		}],
		"U = -int(F)dx": [{
			"type": "equation",
			"fullName": "Potential Energy"
		}],
		"Newton's Law of Gravitation": [{
			"type": "equation",
			"fullName": "Newton's Law of Gravitation"
		}],
		"F_grav = -(Gm1m2)/(r^2)": [{
			"type": "equation",
			"fullName": "Newton's Law of Gravitation"
		}],
		"Fg": [{
			"type": "equation",
			"fullName": "Newton's Law of Gravitation"
		}],
		"Gravitational Potential": [{
			"type": "equation",
			"fullName": "Gravitational Potential"
		}],
		"U_g = -(Gm1m2)/(r)": [{
			"type": "equation",
			"fullName": "Gravitational Potential"
		}],
		"Definition of Coulomb Force": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"F_E =(kq1q2/(r^2))": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"coulombic force": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"electrostatic force": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"Coulomb interaction": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"FE": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"kq1q2/r^2": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"kq^2/r^2": [{
			"type": "equation",
			"fullName": "Definition of Coulomb Force"
		}],
		"Electric Field Strength": [{
			"type": "equation",
			"fullName": "Electric Field Strength"
		}],
		"E=F/q": [{
			"type": "equation",
			"fullName": "Electric Field Strength"
		}],
		"efield": [{
			"type": "equation",
			"fullName": "Electric Field Strength"
		}],
		"F_n = mg": [{
			"type": "equation",
			"fullName": "Normal Force"
		}],
		"Fn": [{
			"type": "equation",
			"fullName": "Normal Force"
		}],
		"Fnormal": [{
			"type": "equation",
			"fullName": "Normal Force"
		}],
		"mg": [{
			"type": "equation",
			"fullName": "Normal Force"
		}],
		"mgcostheta": [{
			"type": "equation",
			"fullName": "Normal Force"
		}],
		"Definition of Centripetal Force": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}],
		"F_c = ma_c": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}],
		"Fc": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}],
		"centripital force": [{
			"type": "equation",
			"fullName": "Definition of Centripetal Force"
		}],
		"Definition of Center of Mass": [{
			"type": "equation",
			"fullName": "Definition of Center of Mass"
		}],
		"Work-Energy Theorem": [{
			"type": "equation",
			"fullName": "Work-Energy Theorem"
		}],
		"Wnet=deltak": [{
			"type": "equation",
			"fullName": "Work-Energy Theorem"
		}],
		"work energy": [{
			"type": "equation",
			"fullName": "Work-Energy Theorem"
		}],
		"p = qd": [{
			"type": "equation",
			"fullName": "Electric Dipole Moment"
		}],
		"q = ne": [{
			"type": "equation",
			"fullName": "Electric Charge"
		}],
		"amount of electricity": [{
			"type": "equation",
			"fullName": "Electric Charge"
		}],
		"Definition of Angular Momentum": [{
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}],
		"L=rxp": [{
			"type": "equation",
			"fullName": "Definition of Angular Momentum"
		}],
		"Definition of Mechanical Power": [{
			"type": "equation",
			"fullName": "Definition of Mechanical Power"
		}],
		"P=W/t": [{
			"type": "equation",
			"fullName": "Definition of Mechanical Power"
		}],
		"omega = theta/t": [{
			"type": "equation",
			"fullName": "Definition of Angular Velocity"
		}],
		"a = dv/dt = d^2x/dt^2": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		"deltav/deltat": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		" delta v/delta t": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		" v/t": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		"v over t": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		" dx2/dt2": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		"x double dot": [{
			"type": "equation",
			"fullName": "Definition of Acceleration"
		}],
		"Weber": [{
			"type": "unit",
			"fullName": "Weber"
		}],
		"Wb": [{
			"type": "unit",
			"fullName": "Weber"
		}],
		"k": [{
			"type": "variable",
			"fullName": "Spring Constant"
		}],
		"Position with Constant Acceleration (no V)": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}],
		"Position with Constant Acceleration (no \"V\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}],
		"x=(x_0)+(v)*t-0.5a*(t^2)": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v_0$\")"
		}],
		"Kinematics Equation (no \"V\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"Kinematics Equation (no $\\Delta X$)": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no $\\Delta X$)"
		}],
		"Kinematics Equation (no \"$V_0$\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v_0$\")"
		}],
		"Kinematics Equation (no \"t\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$t$\")"
		}],
		"Kinematics Equation (no \"a\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}, {
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"x=1/2(v_0+v)*t": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$v$\")"
		}],
		"Kinematics Equation (no \"aa\")": [{
			"type": "equation",
			"fullName": "Kinematics Equation (no \"$a$\")"
		}],
		"avagandro": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avagadro": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avagandro's number": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"avagadro's number": [{
			"type": "variable",
			"fullName": "Avogadro's Number"
		}],
		"a": [{
			"type": "variable",
			"fullName": "Angular Acceleration"
		}],
		"h": [{
			"type": "variable",
			"fullName": "Planck's Constant"
		}],
		"w": [{
			"type": "variable",
			"fullName": "Angular Velocity"
		}],
		"Magnetic Field": [{
			"type": "variable",
			"fullName": "Magnetic Field"
		}],
		"B": [{
			"type": "variable",
			"fullName": "Magnetic Field"
		}, {
			"type": "variable",
			"fullName": "Velocity to Speed of Light Ratio"
		}],
		"Energy": [{
			"type": "variable",
			"fullName": "Energy"
		}],
		"E": [{
			"type": "variable",
			"fullName": "Energy"
		}],
		"Mass–energy equivalence": [{
			"type": "equation",
			"fullName": "Mass–Energy Equivalence"
		}],
		"E=mc^2": [{
			"type": "equation",
			"fullName": "Mass–Energy Equivalence"
		}],
		"Mass–Energy Equivalence": [{
			"type": "equation",
			"fullName": "Mass–Energy Equivalence"
		}],
		"P": [{
			"type": "variable",
			"fullName": "Mechanical Power"
		}],
		"elementary charge": [{
			"type": "variable",
			"fullName": "Elementary Charge"
		}],
		"Electric Current": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}, {
			"type": "variable",
			"fullName": "Electric Current"
		}],
		"i": [{
			"type": "variable",
			"fullName": "Electric Current"
		}],
		"Electric Resistance": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}, {
			"type": "equation",
			"fullName": "Pouillet's law"
		}, {
			"type": "variable",
			"fullName": "Electric Resistance"
		}],
		"R": [{
			"type": "equation",
			"fullName": "Pouillet's law"
		}, {
			"type": "variable",
			"fullName": "Electric Resistance"
		}, {
			"type": "variable",
			"fullName": "Molar Gas Constant"
		}],
		"Cross Section": [{
			"type": "variable",
			"fullName": "Cross Section"
		}],
		"Electrical Resistivity": [{
			"type": "equation",
			"fullName": "Pouillet's law"
		}, {
			"type": "variable",
			"fullName": "Electrical Resistivity"
		}],
		"resistivity": [{
			"type": "equation",
			"fullName": "Pouillet's law"
		}, {
			"type": "variable",
			"fullName": "Electrical Resistivity"
		}],
		"Length": [{
			"type": "variable",
			"fullName": "Length"
		}],
		"l": [{
			"type": "variable",
			"fullName": "Length"
		}],
		"Pouillet's law": [{
			"type": "equation",
			"fullName": "Pouillet's law"
		}],
		"r=rho*l/A": [{
			"type": "equation",
			"fullName": "Pouillet's law"
		}],
		"Ohm's Law": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}],
		"v=ir": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}],
		"Capacitance": [{
			"type": "variable",
			"fullName": "Capacitance"
		}],
		"Molar Gas Constant": [{
			"type": "variable",
			"fullName": "Molar Gas Constant"
		}],
		"Reduced Planck's Constant": [{
			"type": "variable",
			"fullName": "Reduced Planck's Constant"
		}],
		"h_bar": [{
			"type": "variable",
			"fullName": "Reduced Planck's Constant"
		}],
		"hbar": [{
			"type": "variable",
			"fullName": "Reduced Planck's Constant"
		}],
		"h-bar": [{
			"type": "variable",
			"fullName": "Reduced Planck's Constant"
		}],
		"Inductance": [{
			"type": "variable",
			"fullName": "Inductance"
		}],
		"Lorentz Factor": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}, {
			"type": "equation",
			"fullName": "Time Dilation"
		}, {
			"type": "variable",
			"fullName": "Lorentz Factor"
		}],
		"gamma": [{
			"type": "equation",
			"fullName": "Length Contraction"
		}, {
			"type": "variable",
			"fullName": "Lorentz Factor"
		}],
		"Definition of Lorentz Factor": [{
			"type": "equation",
			"fullName": "Ohm's Law"
		}],
		"Velocity to Speed of Light Ratio": [{
			"type": "variable",
			"fullName": "Velocity to Speed of Light Ratio"
		}],
		"beta": [{
			"type": "variable",
			"fullName": "Velocity to Speed of Light Ratio"
		}],
		"Time Dilation": [{
			"type": "equation",
			"fullName": "Time Dilation"
		}],
		"t=t'gamma": [{
			"type": "equation",
			"fullName": "Length Contraction"
		}],
		"Length Contraction": [{
			"type": "equation",
			"fullName": "Length Contraction"
		}],
		"x'=x/gamma": [{
			"type": "equation",
			"fullName": "Time Dilation"
		}],
		"relativity": [{
			"type": "equation",
			"fullName": "Length Contraction"
		}],
		"special relativity": [{
			"type": "equation",
			"fullName": "Definition of Lorentz Factor"
		}]
	}
};