# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  
  config.berkshelf.enabled = true
  config.vm.hostname = "vscassandra"

  config.vm.box_url = "https://opscode-vm.s3.amazonaws.com/vagrant/opscode_centos-6.4_chef-11.4.4.box"
  config.vm.box = "ops-centos"
  config.vm.network :forwarded_port, guest: 9160, host: 9160  # rpc_port
  config.vm.network :forwarded_port, guest: 9042, host: 9042  # native_transport_port 
  config.vm.network :forwarded_port, guest: 8888, host: 8888  # opscenter port
  
  config.vm.provision :chef_solo do |chef|
    
    chef.log_level = :debug
    chef.json = {
      :cassandra => {
        :dse => false,
        :version => '2.0.6-1',
        :opscenter => {
          :agent => {
            :server_host => "127.0.0.1",
            :binary_name => "datastax-agent"
          }
        }
      },
      "java" => {
        "oracle" => {
        "accept_oracle_download_terms" => true
       },
       "oracle_rpm" => {
        "type" => "jdk"
       }, 
       "jdk_version" => '7',
       "install_flavor" => 'oracle',
       "jdk" => {
        "7" => {
          "bin_cmds" => ["java", "javac"]
        }
       }
      }
    }
    chef.add_recipe "java"
    chef.add_recipe "cassandra::tarball"
    chef.add_recipe "cassandra::opscenter_server"
  end
end
