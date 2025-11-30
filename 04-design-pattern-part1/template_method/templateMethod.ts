export {}

abstract class TestTemplate {
  test() {
    this.setup()
    this.execute()
    this.teardown()
  }

  abstract setup();
  abstract execute();

  teardown() {
    console.log('teardown')
  }
}

class ItemServiceTest extends TestTemplate {
  setup() {
    console.log('setup: ItemServiceTest')
  }

  execute() {
    console.log('execute: ItemServiceTest')
  }
}

class UserServiceTest extends TestTemplate {
  setup() {
    console.log('setup: UserServiceTest')
  }

  execute() {
    console.log('execute: UserServiceTest')
  }
}

function run() {
  const itemServiceTest = new ItemServiceTest();
  itemServiceTest.test();

  const userServiceTest = new UserServiceTest();
  userServiceTest.test();
}

run();