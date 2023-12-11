
export default {
    props:['proficiencies'],
    template: `
      <template v-for="proficiency in proficiencies" :key="proficiency.index">
      <div id="technical-section">
      <ul id="technical-proficiencies">
        <li><p>{{ proficiency }}</p></li>
      </ul>
      </div>
      </template>`
}