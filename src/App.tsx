import React, { useState, useEffect, FormEvent } from 'react';
import { Mail, Linkedin, Clock, Shield, Server, Code, Award, Briefcase, User, Database, Network, Lock, Terminal, Monitor, Settings, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const skillCategories = [
    {
      title: "Administration Système",
      icon: <Terminal className="w-12 h-12 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80",
      skills: [
      "Installation et configuration de serveurs LAMP",
      "Gestion du parc informatique",
      "Configuration de PC et tablettes Apple",
      "Création d'images système Macrium",
      "Support utilisateur niveau 1 et 2",
      "Administration Active Directory"
      ]
    },
    {
      title: "Infrastructure Réseau",
      icon: <Network className="w-12 h-12 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      skills: [
      "Configuration de switches",
      "Gestion de VLAN",
      "Installation et maintenance de baies de brassage",
      "Remplacement de modules GBIC",
      "Câblage réseau structuré",
      "Diagnostic réseau"
      ]
    },
    {
      title: "Sécurité",
      icon: <Lock className="w-12 h-12 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
      skills: [
      "Tests de pénétration basiques",
      "Simulation d'attaques de phishing",
      "Gestion des droits utilisateurs",
      "Sécurisation des serveurs LAMP",
      "Mise en place de politiques de sécurité",
      "Audit de sécurité basique"
      ]
    },
    {
      title: "Maintenance",
      icon: <Settings className="w-12 h-12 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      skills: [
        "Maintenance préventive et curative",
        "Remplacement de composants (HDD, SSD)",
        "Diagnostic de pannes",
        "Installation de systèmes d'exploitation",
        "Mise à jour matérielle et logicielle",
        "Documentation technique"
      ]
    }
  ];  

  const projects = [
    {
    title: "Installation d'un serveur LAMP Sécurisé",
    description: "Mise en place d'une infrastructure LAMP sécurisée pour héberger des applications web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    skills: ["Apache", "MySQL", "PHP", "Sécurité"],
    details: "Installation et configuration d'un serveur LAMP, mise en place des règles de sécurité, configuration du pare-feu, mise à jour régulière des composants."
    },
    {
      title: "Projet Phishing avec Machine Virtuelle Debian",
    description: "Simulation d'attaques de phishing pour la sensibilisation à la sécurité",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    skills: ["Debian", "HTTRACK", "phpMyAdmin", "Sécurité"],
    details: "Configuration d'une machine virtuelle Debian, utilisation de HTTRACK pour le clonage de sites, mise en place d'une base de données phpMyAdmin pour la collecte de données."
    },
    {
      title: "Projets Serveur Active Directory",
      description: "Installation d'un serveur Active Directory et ses outils",
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["WDS", "GPO", "DNS & DHCP"],
      details: "Installation d'un serveur Active Directory sous machine virtuelle, configuration de DNS et DHCP, utilisation de GPO pour la gestion centralisée, ajout et gestion des utilisateurs et groupes, gestion des droits d'accès et des stratégies de sécurité."
    }
  ];
  

  const educationPath = [
    {
      period: "2024 - 2026",
      school: "ISCB Tours",
      degree: "BTS SIO",
      description: "BTS Services Informatiques aux Organisations - Option SISR",
      url: "https://iscb.fr/",
      icon: <Server className="w-12 h-12 text-cyan-500" />
    },
    {
      period: "2021 - 2024",
      school: "Lycée Henri Becquerel",
      degree: "Bac Pro SN RISC",
      description: "Baccalauréat Professionnel Systèmes Numériques option Réseaux Informatiques et Systèmes Communicants",
      url: "https://www.lp-becquerel.eu/",
      icon: <Code className="w-12 h-12 text-cyan-500" />
    },
    {
      period: "2018 - 2021",
      school: "Collège Saint Gatien",
      degree: "Brevet des Collèges",
      description: "Collège privé à Joué-lès-Tours",
      url: "https://www.saint-gatien.org/",
      icon: <Shield className="w-12 h-12 text-cyan-500" />
    }
  ];

  const certifications = [
    {
      name: "SecNumAcadémie",
      description: "Certification des 4 modules MOOC (14/06/2023)",
      url: "/MOOC.jpg/",
      icon: <Shield className="w-12 h-12 text-cyan-500" />,
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
    }
  ];
  

  const internships = [
    {
      period: "2024",
      company: "Faculté de Médecine de Tours",
      title: "Stage au Service Informatique",
      tasks: [
        "Configuration de tablettes Apple",
        "Mise en place de PC dans un laboratoire",
        "Ajout de nouveaux utilisateurs sur le réseau",
        "Refonte complète d'une baie de brassage"
      ],
      icon: <Database className="w-12 h-12 text-cyan-500" />
    },
    {
      period: "22/05/2023 - 16/06/2023",
      company: "Mairie de Joué-lès-Tours (DSI)",
      title: "Stage en Informatique",
      tasks: [
        "Installation d'un GLPI pour le parc informatique avec ses plugins",
        "Création d'image backup avec Macrium",
        "Formation en cybersécurité (phishing)"
      ],
      icon: <Server className="w-12 h-12 text-cyan-500" />
    },
    {
      period: "16/01/2023 - 10/02/2023",
      company: "Mairie de Joué-lès-Tours (DSI)",
      title: "Stage en Informatique",
      tasks: [
        "Configuration de PC",
        "Changement de HDD et SSD",
        "Remplacement de GBIC",
        "Configuration de Switch"
      ],
      icon: <Briefcase className="w-12 h-12 text-cyan-500" />
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar (Navigation) */}
      <div className="w-64 bg-slate-800 text-white min-h-screen fixed left-0 p-6">
        <div className="text-xl font-bold mb-6">
          <h2>Navigation</h2>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-6">
          <a href="mailto:simonetchart37@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/simon-etchart-b958842bb/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          {[
            'Accueil',
            'A propos',
            'Parcours',
            'Certifications',
            'Expériences Professionnelles',
            'Compétences',
            'Projets',
            'BTS SIO',
            'Contact'
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-2 px-4 rounded hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Hero Section */}
        <div id="CV" className="section h-screen relative flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
              alt="Cybersecurity Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold text-cyan-400 mb-4">ETCHART Simon</h1>
            <p className="text-lg text-gray-300 mb-4">
              Étudiant en BTS SIO option SISR | Alternant SNCF
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="Simon CV.pdf"
                className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Curriculum Vitae
              </a>
              <a
                href="/Compétences"
                className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Tableau des compétences
              </a>
            </div>
          </div>
        </div>

        {/* A propos Section */}
        <div id="a-propos" className="section py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">A propos</h2>
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <User className="w-8 h-8" />
                Qui suis-je ?
              </h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  Je me présente, je suis Simon ETCHART, étudiant en BTS SIO option SISR et alternant auprès de la SNCF.
                </p>
                <p>
                  Je suis passionné par l'informatique, plus particulièrement par les aspects liés à l'administration des systèmes et réseaux, et je me dirige vers une spécialisation dans ce domaine.
                </p>
                <p>
                  Mon objectif est de continuer à développer mes compétences et à approfondir mes connaissances en informatique, avec l'ambition de poursuivre mes études jusqu'au niveau du master.
                </p>
                <p>
                  Étant donné que le secteur de l'informatique est en constante évolution, je suis motivé à l'idée de relever les défis associés et de participer activement à la gestion et à la sécurisation des infrastructures dans un monde de plus en plus numérisé.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parcours Section */}
        <div id="parcours" className="section py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Mon Parcours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationPath.map((education, index) => (
                <motion.a
                  key={index}
                  href={education.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {education.icon}
                    <h3 className="text-xl font-bold text-cyan-400 mt-4">{education.school}</h3>
                    <p className="text-gray-400 text-sm mt-2">{education.period}</p>
                    <p className="text-white mt-2">{education.degree}</p>
                    <p className="text-gray-400 text-sm mt-2">{education.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div id="certifications" className="section py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {cert.icon}
                    <h3 className="text-xl font-bold text-cyan-400 mt-4">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{cert.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Expériences professionnelles Section */}
        <div id="expériences-professionnelles" className="section py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Expériences professionnelles</h2>
            <div className="grid grid-cols-1 gap-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      {internship.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{internship.company}</h3>
                      <p className="text-gray-400 text-sm">{internship.period}</p>
                      <p className="text-white mt-2">{internship.title}</p>
                      <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                        {internship.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Compétences Section */}
        <div id="compétences" className="section py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-cyan-400">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="text-gray-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projets Section */}
        <div id="projets" className="section py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700 rounded-lg overflow-hidden shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm">{project.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* BTS SIO Section */}
        <div id="bts-sio" className="section py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">BTS SIO</h2>
            <motion.div 
              className="bg-slate-700 rounded-lg p-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Qu'est-ce que le BTS SIO ?</h3>
                <p className="text-gray-300">
                  Le BTS Services Informatiques aux Organisations est un diplôme de niveau Bac+2 qui forme des professionnels de l'informatique. Cette formation permet d'acquérir des compétences techniques et managériales pour répondre aux besoins des entreprises en matière de services informatiques.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <motion.div 
                  className="bg-slate-800 rounded-lg p-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-8 h-8 text-cyan-500" />
                    <h3 className="text-xl font-bold text-cyan-400">Option SISR</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Solutions d'Infrastructure, Systèmes et Réseaux
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Administration des systèmes</li>
                    <li>• Gestion des réseaux</li>
                    <li>• Cybersécurité</li>
                    <li>• Virtualisation</li>
                    <li>• Support et maintenance</li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-slate-800 rounded-lg p-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-8 h-8 text-cyan-500" />
                    <h3 className="text-xl font-bold text-cyan-400">Option SLAM</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Solutions Logicielles et Applications Métiers
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Développement d'applications</li>
                    <li>• Programmation web</li>
                    <li>• Bases de données</li>
                    <li>• Applications mobiles</li>
                    <li>• Méthodes agiles</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="section py-20 bg-slate-900">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Contact</h2>
            <motion.form 
              className="bg-slate-800 rounded-lg p-8 shadow-xl space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const form = e.currentTarget;
                
                try {
                  const loadingToast = toast.loading('Envoi en cours...');
                  
                  await emailjs.sendForm(
                    'YOUR_SERVICE_ID',
                    'YOUR_TEMPLATE_ID',
                    form,
                    'YOUR_PUBLIC_KEY'
                  );
                  
                  toast.dismiss(loadingToast);
                  toast.success('Message envoyé avec succès !');
                  form.reset();
                } catch (error) {
                  toast.error('Erreur lors de l\'envoi du message.');
                  console.error('Error:', error);
                }
              }}
            >
              <div>
                <label htmlFor="from_name" className="block text-cyan-400 mb-2">Nom</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="w-full bg-slate-700 rounded-lg px-4 py-2 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-cyan-400 mb-2">Email</label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="w-full bg-slate-700 rounded-lg px-4 py-2 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-cyan-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-slate-700 rounded-lg px-4 py-2 text-white border border-slate-600 focus:border-cyan-400 focus:outline-none resize-none"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-cyan-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-cyan-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                Envoyer
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;