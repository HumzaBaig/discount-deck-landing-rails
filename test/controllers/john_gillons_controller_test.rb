require 'test_helper'

class JohnGillonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @john_gillon = john_gillons(:one)
  end

  test "should get index" do
    get john_gillons_url
    assert_response :success
  end

  test "should get new" do
    get new_john_gillon_url
    assert_response :success
  end

  test "should create john_gillon" do
    assert_difference('JohnGillon.count') do
      post john_gillons_url, params: { john_gillon: {  } }
    end

    assert_redirected_to john_gillon_url(JohnGillon.last)
  end

  test "should show john_gillon" do
    get john_gillon_url(@john_gillon)
    assert_response :success
  end

  test "should get edit" do
    get edit_john_gillon_url(@john_gillon)
    assert_response :success
  end

  test "should update john_gillon" do
    patch john_gillon_url(@john_gillon), params: { john_gillon: {  } }
    assert_redirected_to john_gillon_url(@john_gillon)
  end

  test "should destroy john_gillon" do
    assert_difference('JohnGillon.count', -1) do
      delete john_gillon_url(@john_gillon)
    end

    assert_redirected_to john_gillons_url
  end
end
