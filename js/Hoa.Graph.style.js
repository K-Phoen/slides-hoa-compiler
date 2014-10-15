var defs = new Hoa.Graph(document.body, 0, 0);
defs.element('defs')
    .append(
        defs.element('radialGradient')
            .attr({
                'id': 'boxFill',
                'cx': '50%',
                'cy': '50%',
                'r' : '100%',
                'fx': '50%',
                'fy': '10%'
            })
            .append(
                defs.element('stop')
                    .attr({
                        'offset'    : '5%',
                        'stop-color': '#8ec33d'
                    })
            )
            .append(
                defs.element('stop')
                    .attr({
                        'offset'    : '95%',
                        'stop-color': '#508106'
                    })
            )
    )
    .append(
        defs.element('marker')
            .attr({
                'id'          : 'arrow',
                'refX'        : 0,
                'refY'        : 3,
                'markerUnits' : 'strokeWidth',
                'markerWidth' : 12,
                'markerHeight': 10,
                'orient'      : 'auto'
            })
            .append(
                defs.element('path')
                    .attr({
                        'd': 'M 0,0 L 0,6 7,3 z'
                    })
            )
    );
