/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change these values to generate a different story
*/

const pluralNoun = 'dinosaurs'
const adj = 'ambitious'
const verb1 = 'swim'
const verb2 = 'plug'
const noun = 'snowman'

const story = `My ${pluralNoun} are ${adj}. This is because they will ${verb1} if you come near them. It is best to ${verb2} them and give them your ${noun}.`

console.log(story)