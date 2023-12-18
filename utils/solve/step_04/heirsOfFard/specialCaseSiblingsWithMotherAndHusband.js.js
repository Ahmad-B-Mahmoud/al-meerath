/** This special case When the Gender is Female and there is a husband, Mother | Grandmother, MaternalSiblings and Siblings only. */

import useStore from "@/store";

function specialCaseSiblingsWithMotherAndHusband() {
  // Variables:
  const {
    creed,
    gender,
    hasDescendants,
    husband,
    mother,
    fatherSideGrandmother,
    motherSideGrandmother,
    maternalSiblings,
    brothers,
    sisters,
    heirsOfFard,
    editHeirsOfFard,
    addHeirsOfFard,
    amount,
    addIssueNote,
  } = useStore.getState();

  if (gender === "female" && creed === "الشافعي") {
    if (
      !hasDescendants &&
      husband &&
      (mother || motherSideGrandmother || fatherSideGrandmother) &&
      maternalSiblings >= 2 &&
      brothers > 0
    ) {
      // First: Calculate the 1/3 cut.
      const thirdCutAmount = amount / 3;

      // Second: Calculate all Siblings count.
      const siblingsCount =
        parseInt(maternalSiblings) + parseInt(brothers) + parseInt(sisters);

      // Third: What Each Sibling Will Earn.
      const eachSiblingEarn = thirdCutAmount / siblingsCount;

      const newA = heirsOfFard.map((heir) => {
        if (heir.title === "الأخوة لأم") {
          return {
            ...heir,
            count: siblingsCount,
            earn: siblingsCount * eachSiblingEarn,
          };
        } else {
          return {
            ...heir,
          };
        }
      });
      editHeirsOfFard(newA);
      addIssueNote(
        "هنا الثلث يُقسم بالتساوي لا فرق بين إخوة و أخوات أشقاء و إخوة و أخوات لأم و لا فرق بين ذكر و أنثى و يشتركون في هذا الثلث بصفتهم إخوة من الأم لأن الأخوة و الأخوات الشقيقات لن يتبقى لهم شي ليرثوه بالتعصيب، و هذه المسألة هي مسألة شهيرة تُسمى بالمسألة المشتركة أو الحجرية أو الُعمرية لأن سيدنا عمر بن الخطاب رضي الله عنه قضى بها."
      );
    }
  }
}

export default specialCaseSiblingsWithMotherAndHusband;
