export interface Project {
   id: string;
   name: string;
   description: string;
}

export const PROJECTS: Project[] = [

   {
      id: 'd',
      name: 'reading-level',
      description: 'find out the approximate grade level needed to comprehend given text'
   },
   {
      id: 'c',
      name: 'substitution-cipher',
      description: 'encrypt and decipher a message by replacing every letter with another letter'
   },
   {
      id: 'e',
      name: 'preference-polling',
      description: 'compute a polling result that represents the ranked choices of a group'
   },
   {
      id: 'a',
      name: 'idle-journal',
      description: 'keep everything in one place and never miss out on anything'
   },
   {
      id: 'b',
      name: 'signature-generator',
      description: 'create a signature with name, contact info, and social media presence'
   },
   {
      id: 'f',
      name: 'mix-match',
      description: 'play mix and match card game'
   },
   {
      id: 'g',
      name: 'notes-over',
      description: 'jot down notes on any document to be signed off'
   },
   {
      id: 'h',
      name: 'architecture-portfolio',
      description: 'website showcasing architectural design projects over the years built in React.js'
   },
   {
      id: 'i',
      name: "...",
      description: ''
   },


];