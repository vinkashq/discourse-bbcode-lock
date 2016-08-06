# Lock BBCode for Discourse

A Discourse plugin to hide post contents to guest (anonymous).

## Usage

In your posts, surround text with [lock=guest] ... [/lock]. For example:

```
   I watched the murder mystery on TV last night. [lock=guest]The butler did it[/lock].
```

## Installation

* Add the plugin's repo url to your container's yml config file

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/vinkas0/discourse-bbcode-lock.git
```

* Rebuild the container

```shell
cd /var/discourse
git pull
./launcher rebuild app
```

* Re-render all posts now that the plugin is installed. This won't create any extra revisions.

```shell
rake posts:rebake
```

## Issues

If you have issues or suggestions for the plugin, please bring them up on [Vinkas Community](https://community.vinkas.com).

## License

MIT
