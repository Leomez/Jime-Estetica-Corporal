
const LoginForm = require('../Componentes/Login/Login.jsx')


it("test_happy_path_login", () => {
    const props = {
        onSwitchForm: jest.fn()
    }
    const wrapper = mount(<LoginForm {...props} />);
    const usernameInput = wrapper.find('#username');
    const passwordInput = wrapper.find('#password');
    const submitButton = wrapper.find('button[type="submit"]');

    // Set valid username and password
    usernameInput.simulate('change', { target: { value: 'test@test.com' } });
    passwordInput.simulate('change', { target: { value: 'Test1234' } });

    // Submit form
    submitButton.simulate('submit');

    // Check that error messages are not displayed
    expect(wrapper.find('ul')).toHaveLength(0);

    // Check that onSwitchForm function is not called
    expect(props.onSwitchForm).not.toHaveBeenCalled();
});