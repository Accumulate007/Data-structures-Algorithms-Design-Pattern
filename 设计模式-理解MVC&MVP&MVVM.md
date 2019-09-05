MVC,MVP和MVVM是开发者日常中最常遇到的软件架构模式，搞清楚这几个概念非常重要。

### MVC
在出现MVC模式之前，软件开发中视图和数据是混杂在一起的，非常难以管理。<br/>
MVC模式将程序分为三个部分：模型(Model)，视图(View)，控制器(Controller)。<br/>
1.<strong>模型<strong>：负责业务数据的处理和存储，数据更新后更新。<br/>
2.<strong>视图<strong>：人机交互的接口，一般是展示给用户的界面。<br/>
3.<strong>控制器<strong>：负责连接Mode层和View层，接受并处理View触发的事件，并将Model层的数据变动时更新View层。<br/>
MVC模式将模型和视图分离，使得系统在可维护性和可读性上有了改进。<br/>
但是在某些场景下，View层会采用观察者模式监听Model层的变化，这样Mode层和View层就相互持有、相互操作，导致紧密的耦合。这就导致了MVP模式的产生。

### MVP
MPV模式将MVC中的Controller层改进为Presenter层(管理层)。Mode层和View层只能通过Presenter层进行交互，这样Mode层和View层进行了完全的解耦，互不干涉。<br/>
MVP模式经典的流程是，View层触发的事件传递给Presenter层处理，由Presenter层去操作Model层，然后Model将更新的数据传给Presenter层，再由Presenter层去
更新View层视图。这个过程中Mode层和View层没有直接联系。<br/>
但是在MVP模式中，Presenter层去更新视图，需要调用View层中的相关方法，导致了Presenter层对View层的依赖。那么有没有什么方式可以自动更新视图而无需手动调用
呢？这就产生了MVVM的模式。

### MVVM
MVVM模式中，Mode层和View层也是完全解耦的，但是它新建了一个VM(View-Model)视图模型，相比MVP模式新增了双向绑定机制。View层的变动将自动反应ViewModel
上，反之也是一样的。

