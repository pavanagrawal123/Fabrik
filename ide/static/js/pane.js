import React from 'react';
import PaneElement from './paneElement';

class Pane extends React.Component {
  constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            data: false,
            vision: false,
            recurrent: false,
            utility: false,
            activation: false,
            normalization: false,
            common: false,
            noise: false,
            loss: false
        };
    }
    toggleClass(layer) {
        var obj = {};
        obj[layer] = !this.state[layer];
        this.setState(obj);
    }
    render(){
      return (
        <div className="panel-group" id="menu" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div href="#data" data-toggle="collapse" aria-expanded="false" aria-controls="data" 
                className="panel-heading" role="tab"  onClick={() => this.toggleClass('data')}>
                    <a data-parent="#menu"  >
                    <span className="badge sidebar-badge" id="dataLayers"> </span>
                      Data
                      <span className={this.state.data ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'}></span>
                    </a>
                </div>
                <div id="data" className="panel-collapse collapse" role=" tabpanel">
                  <div className="panel-body">
                    <PaneElement id="ImageData">Image Data</PaneElement>
                    <PaneElement id="Data">Data</PaneElement>
                    <PaneElement id="HDF5Data">HDF5 Data</PaneElement>
                    <PaneElement id="HDF5Output">HDF5 Output</PaneElement>
                    <PaneElement id="Input">Input</PaneElement>
                    <PaneElement id="WindowData">Window Data</PaneElement>
                    <PaneElement id="MemoryData">Memory Data</PaneElement>
                    <PaneElement id="DummyData">Dummy Data</PaneElement>
                    <PaneElement id="Python">Python</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse"  href="#vision" 
                aria-expanded="false" aria-controls="vision" onClick={() => this.toggleClass('vision')}>
                    <a data-parent="#menu">
                    <span className="badge sidebar-badge" id="visionLayers"> </span>
                      Vision
                      <span className={this.state.vision ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="vision" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="Convolution">Convolution</PaneElement>
                    <PaneElement id="Pooling">Pool</PaneElement>
                    <PaneElement id="Upsample">Upsample</PaneElement>
                    <PaneElement id="LocallyConnected">Locally Connected</PaneElement>
                    <PaneElement id="Crop">Crop</PaneElement>
                    <PaneElement id="SPP">SPP</PaneElement>
                    <PaneElement id="Deconvolution">Deconvolution</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse"  href="#recurrent" 
                aria-expanded="false" aria-controls="recurrent" onClick={() => this.toggleClass('recurrent')}>
                    
                    <a data-parent="#menu" >
                    <span className="badge sidebar-badge" id="recurrentLayers"> </span>
                      Recurrent
                      <span className={this.state.recurrent ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="recurrent" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="Recurrent">Recurrent</PaneElement>
                    <PaneElement id="RNN">RNN</PaneElement>
                    <PaneElement id="GRU">GRU</PaneElement>
                    <PaneElement id="LSTM">LSTM</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse" href="#utility" 
                aria-expanded="false" aria-controls="utility" onClick={() => this.toggleClass('utility')}>
                    
                    <a  data-parent="#menu">
                    <span className="badge sidebar-badge" id="utilityLayers"> </span>
                      Utility
                      <span className={this.state.utility ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'}></span>
                    </a>
                </div>
                <div id="utility" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="Flatten">Flatten</PaneElement>
                    <PaneElement id="Reshape">Reshape</PaneElement>
                    <PaneElement id="BatchReindex">Batch Reindex</PaneElement>
                    <PaneElement id="Split">Split</PaneElement>
                    <PaneElement id="Concat">Concat</PaneElement>
                    <PaneElement id="Eltwise">Eltwise</PaneElement>
                    <PaneElement id="Filter">Filter</PaneElement>
                    <PaneElement id="Reduction">Reduction</PaneElement>
                    <PaneElement id="Silence">Silence</PaneElement>
                    <PaneElement id="ArgMax">ArgMax</PaneElement>
                    <PaneElement id="Softmax">Softmax</PaneElement>
                    <PaneElement id="Permute">Permute</PaneElement>
                    <PaneElement id="RepeatVector">Repeat Vector</PaneElement>
                    <PaneElement id="Regularization">Regularization</PaneElement>
                    <PaneElement id="Masking">Masking</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div data-toggle="collapse"  href="#activation" aria-expanded="false" aria-controls="activation" 
                className="panel-heading" role="tab" onClick={() => this.toggleClass('activation')}>
                    <a data-parent="#menu" >
                    <span className="badge sidebar-badge" id="activationLayers"> </span>
                      Activation/Neuron
                      <span className={this.state.activation ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="activation" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="ReLU">ReLU/Leaky-ReLU</PaneElement>
                    <PaneElement id="PReLU">PReLU</PaneElement>
                    <PaneElement id="ELU">ELU</PaneElement>
                    <PaneElement id="ThresholdedReLU">Thresholded ReLU</PaneElement>
                    <PaneElement id="SELU">SELU</PaneElement>
                    <PaneElement id="Softplus">Softplus</PaneElement>
                    <PaneElement id="Softsign">Softsign</PaneElement>
                    <PaneElement id="Sigmoid">Sigmoid</PaneElement>
                    <PaneElement id="TanH">TanH</PaneElement>
                    <PaneElement id="HardSigmoid">Hard Sigmoid</PaneElement>
                    <PaneElement id="AbsVal">Absolute Value</PaneElement>
                    <PaneElement id="Power">Power</PaneElement>
                    <PaneElement id="Exp">Exp</PaneElement>
                    <PaneElement id="Log">Log</PaneElement>
                    <PaneElement id="BNLL">BNLL</PaneElement>
                    <PaneElement id="Threshold">Threshold</PaneElement>
                    <PaneElement id="Bias">Bias</PaneElement>
                    <PaneElement id="Scale">Scale</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse" href="#normalization" 
                aria-expanded="false" aria-controls="normalization" onClick={() => this.toggleClass('normalization')}>
                    <a  data-parent="#menu" >
                    <span className="badge sidebar-badge" id="normalizationLayers"> </span>
                      Normalization
                      <span className={this.state.normalization ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="normalization" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="LRN">LRN</PaneElement>
                    <PaneElement id="MVN">MVN</PaneElement>
                    <PaneElement id="BatchNorm">Batch Norm</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse"  href="#common" aria-expanded="false"
                aria-controls="common" onClick={() => this.toggleClass('common')}>
                    <a data-parent="#menu">
                    <span className="badge sidebar-badge" id="commonLayers"> </span>
                      Common
                      <span className={this.state.common ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="common" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="InnerProduct">Inner Product</PaneElement>
                    <PaneElement id="Dropout">Dropout</PaneElement>
                    <PaneElement id="Embed">Embed</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse"  href="#noise" aria-expanded="false" 
                aria-controls="noise" onClick={() => this.toggleClass('noise')}>
                    
                    <a data-parent="#menu" >
                    <span className="badge sidebar-badge" id="noiseLayers"> </span>
                      Noise
                      
                      <span className={this.state.noise ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'}></span>
                    </a>
                </div>
                <div id="noise" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="GaussianNoise">Gaussian Noise</PaneElement>
                    <PaneElement id="GaussianDropout">Gaussian Dropout</PaneElement>
                    <PaneElement id="AlphaDropout">Alpha Dropout</PaneElement>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" data-toggle="collapse" href="#loss" aria-expanded="false" 
                aria-controls="loss" onClick={() => this.toggleClass('loss')}>
                    <a  data-parent="#menu">
                    <span className="badge sidebar-badge" id="lossLayers"> </span>
                      Loss
                      <span className={this.state.loss ? 'glyphicon sidebar-dropdown glyphicon-menu-down': 
                      'glyphicon sidebar-dropdown glyphicon-menu-right'} ></span>
                    </a>
                </div>
                <div id="loss" className="panel-collapse collapse" role="tabpanel">
                  <div className="panel-body">
                    <PaneElement id="MultinomialLogisticLoss">Multinomial Logistic Loss</PaneElement>
                    <PaneElement id="InfogainLoss">Infogain Loss</PaneElement>
                    <PaneElement id="SoftmaxWithLoss">Softmax With Loss</PaneElement>
                    <PaneElement id="EuclideanLoss">Euclidean Loss</PaneElement>
                    <PaneElement id="HingeLoss">Hinge Loss</PaneElement>
                    <PaneElement id="SigmoidCrossEntropyLoss">Sigmoid Cross Entropy Loss</PaneElement>
                    <PaneElement id="Accuracy">Accuracy</PaneElement>
                    <PaneElement id="ContrastiveLoss">Contrastive Loss</PaneElement>
                    <PaneElement id="Python">Python</PaneElement>
                  </div>
                </div>
              </div>
        </div>


      );
  }
}

export default Pane;
