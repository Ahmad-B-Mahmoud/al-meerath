// Reset All the Issue Store slices Values to the defaults:
import useStore from "@/store";

function resetIssueStore() {
  // Variables:
  const {
    resetSteps,
    resetAmount,
    resetError,
    resetCreed,
    resetGender,
    resetDaughters,
    resetHasDescendants,
    resetHasMaleDescendants,
    resetHasFemaleDescendants,
    resetGranddaughters,
    resetGrandsons,
    resetGreatgranddaughters,
    resetGreatgrandsons,
    resetSons,
    resetFather,
    resetFatherSideGrandmother,
    resetHasSiblingsDialog,
    resetHasSiblings,
    resetGrandfather,
    resetHusband,
    resetMother,
    resetMotherSideGrandmother,
    resetWifes,
    resetBrothers,
    resetMaternalSiblings,
    resetPaternalBrothers,
    resetPaternalSisters,
    resetSisters,
    resetCousins,
    resetNephews,
    resetPaternalCousins,
    resetPaternalUncles,
    resetUncles,
    resetHeirsOfConsanguinity,
    resetHeirsOfFard,
    resetIssueNote,
    resetAllStock,
    resetStocksLeft,
    resetIssueType,
  } = useStore.getState();

  // Functions:
  resetSteps();
  resetAmount();
  resetError();
  resetCreed();
  resetGender();
  resetDaughters();
  resetHasDescendants();
  resetHasMaleDescendants();
  resetHasFemaleDescendants();
  resetGranddaughters();
  resetGrandsons();
  resetGreatgranddaughters();
  resetGreatgrandsons();
  resetSons();
  resetFather();
  resetFatherSideGrandmother();
  resetHasSiblingsDialog();
  resetHasSiblings();
  resetGrandfather();
  resetHusband();
  resetMother();
  resetMotherSideGrandmother();
  resetWifes();
  resetBrothers();
  resetMaternalSiblings();
  resetPaternalBrothers();
  resetPaternalSisters();
  resetSisters();
  resetCousins();
  resetNephews();
  resetPaternalCousins();
  resetPaternalUncles();
  resetUncles();
  resetHeirsOfConsanguinity();
  resetHeirsOfFard();
  resetIssueNote();
  resetAllStock();
  resetStocksLeft();
  resetIssueType();
}

export default resetIssueStore;
