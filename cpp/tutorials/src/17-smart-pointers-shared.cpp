#include <iostream>
#include <memory>
using namespace std;

class MyClass {
public:
    MyClass() {
        cout << "Constructor invoked" << endl;
    }
    ~MyClass() {
        cout << "Destructor invoked" << endl;
    }
};

int main() {
    shared_ptr<MyClass>shPtr1 = make_shared<MyClass>();
    cout << "Shared count: " << shPtr1.use_count() << endl; // write number of owners sharing this pointer

    {
        shared_ptr<MyClass>shPtr2 = shPtr1;
        cout << "Shared count: " << shPtr1.use_count() << endl;
    } // owner destroyed at the end of this scope

    // shared pointer will be deallocated when all owners have been removed
    cout << "Shared count: " << shPtr1.use_count() << endl;

    return 0;
} 