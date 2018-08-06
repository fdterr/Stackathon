import React from 'react';

export default function Innings(props) {
  return (
    <div>
      <h3>Batter and Inning Input</h3>
      <form name="batting">
        <label>Which Team is Batting?</label>
        <select name="batting">
          <option value="homeTeam">Home Team</option>
          <option value="awayTeam">Away Team</option>
        </select>
      </form>
      <br />
      <form name="inning">
        <label>What Inning is It?</label>
        <label htmlFor="1">1st</label>
        <input type="radio" name="inning" id="1" value="1" />

        <label htmlFor="2">2nd</label>
        <input type="radio" name="inning" id="2" value="2" />

        <label htmlFor="3">3rd</label>
        <input type="radio" name="inning" id="3" value="3" />

        <label htmlFor="4">4th</label>
        <input type="radio" name="inning" id="4" value="4" />

        <label htmlFor="5">5th</label>
        <input type="radio" name="inning" id="5" value="5" />

        <label htmlFor="6">6th</label>
        <input type="radio" name="inning" id="6" value="6" />

        <label htmlFor="7">7th</label>
        <input type="radio" name="inning" id="7" value="7" />

        <label htmlFor="8">8th</label>
        <input type="radio" name="inning" id="8" value="8" />

        <label htmlFor="9">9th</label>
        <input type="radio" name="inning" id="9" value="9" />
      </form>
    </div>
  );
}

{
  /* <form action="//www.html.am/html-codes/forms/html-form-tag-action.cfm" target="result" method="get">
<p>What is your gender?</p>
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
<p><input type="submit" value="Submit"></p>
</form>
<h3>Result:</h3>
<iframe name="result" style="height:100px;width:200px;"></iframe> */
}
