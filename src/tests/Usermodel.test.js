const mongoose = require('mongoose');
const {createUser, User} = require('../functions/userModel.js');


//test suite
describe('User Model Testing', () => {
    ///AAA Pattern - Arrange, Act, Assert
    //jest hook
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    
     it('should create a new user', async () => {

        //arrange by setting up mock object literal
        const mockUser = {
            firstName: "Todd",
            email: "josh.nash@example.com",
            password: "password",
            age: 100
        };

        // Action: mock save to resolve to the mockUser
        jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);

        var result = await createUser('Todd', 'josh.nash@example.com', 'password', 100);

        // Assert
        expect(result).toEqual(expect.objectContaining(mockUser));
        expect(User.prototype.save).toHaveBeenCalledTimes(1);
    });

});