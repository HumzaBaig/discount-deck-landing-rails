require "application_system_test_case"

class JohnGillonsTest < ApplicationSystemTestCase
  setup do
    @john_gillon = john_gillons(:one)
  end

  test "visiting the index" do
    visit john_gillons_url
    assert_selector "h1", text: "John Gillons"
  end

  test "creating a John gillon" do
    visit john_gillons_url
    click_on "New John Gillon"

    click_on "Create John gillon"

    assert_text "John gillon was successfully created"
    click_on "Back"
  end

  test "updating a John gillon" do
    visit john_gillons_url
    click_on "Edit", match: :first

    click_on "Update John gillon"

    assert_text "John gillon was successfully updated"
    click_on "Back"
  end

  test "destroying a John gillon" do
    visit john_gillons_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "John gillon was successfully destroyed"
  end
end
