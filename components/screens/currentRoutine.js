import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CountDown from 'react-native-countdown-component';

class CurrentRoutine extends Component {

    state = { activeIndex: 0, running: false, props: null }

    windowWidth = Dimensions.get('window').width;
    windowHeight = Dimensions.get('window').height;

    renderItem = ({item}) => {
        return (
            <View style={{
                backgroundColor:'floralwhite',
                alignItems: 'center',
                borderRadius: 5,
                height: 450,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
                borderWidth: 1, 
                justifyContent: 'center'}}>
              <Text style={{fontSize: 36,}}>{item.title}</Text>

              {item.type == 'timer' && <CountDown
                    until={item.timer * 60}
                    size={30}
                    onFinish={() => alert('Finished')}
                    digitStyle={{backgroundColor: '#FFF'}}
                    digitTxtStyle={{color: '#a7cdbd'}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: 'MM', s: 'SS'}}
                    running={this.state.running}
                />}
                {item.type == 'timer' &&
                <Pressable style={styles.startButton} onPress={() => {
                    this.setState({running: true})
                }}>
                    <Text style ={styles.startText}>Start Timer</Text>
                </Pressable>}
                {item.type == 'timer' &&
                <Pressable style={styles.pauseButton} onPress={() => {
                    this.setState({running: false})
                }}>
                    <Text style ={styles.pauseText}>Pause</Text>
                </Pressable>}
                {item.type == 'reflection' &&
                <Pressable style={styles.reflectionButton} onPress={() => {
                    this.state.props.navigation.navigate('Reflection')
                }}>
                    <Text style ={styles.startText}>Start Reflection</Text>
                </Pressable>}
                <Text style ={styles.description}>{item.description}</Text>
            </View>
        );
    }


    render () {
        var tasks = this.props.route.params.taskList;
        var num = this.props.route.params.num;
        this.state.props = this.props
        // maintain index of current task, list of tasks
            // 
            // task: name, description, type - timer
            // if type is timer task
            // start timer
            // show name and description

            // if type is untimed task, show description

            // if type is reflection, show description
            // give option to record voice - will transcribe, or type
        
        return (
            <View style={styles.container}>
                <View style={styles.carousel }>
                    <Carousel   
                    data={tasks}
                    renderItem={this.renderItem}
                    layout={'default'}
                    sliderWidth={this.windowWidth}
                    itemWidth={290}
                    ref={ref => this.carousel = ref}
                    onSnapToItem={(index) => this.setState({ activeIndex: index }) } />
                </View>
                {this.state.activeIndex == num && <Pressable style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Home')
                }}>
                    <Text style ={styles.complete}>Complete!</Text>
                </Pressable>}
            </View>
        );
    }
}

export default CurrentRoutine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        alignContent: 'center',
    },
    carousel: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent: 'center',
        marginTop: 80,
    },
    startButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7cdbd',
        height: 40,
        width: 90,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
      },
    pauseButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161b33',
        height: 40,
        width: 90,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
      },
      pauseText: {
        color:'floralwhite',
      },
      complete: {
          fontSize: 20,
          color: '#161b33',
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7cdbd',
        height: 50,
        width: 120,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
        marginBottom: 30,
      },
      description: {
        color: '#a7cdbd',
        marginTop: 30,
      },
      reflectionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a7cdbd',
        height: 40,
        width: 150,
        padding: 6,
        elevation: 10,
        borderRadius: 8,
        margin: 5,
        borderWidth: 1,
      }
});
