<Col md="12">
                                    <Row>
                                        <Col md="12">
                                            <h4 className="text-center title-style"><span>My Projects</span></h4>
                                        </Col>
                                        {projects.map((project) => (
                                            <Col md="4" className="mb-4" key={project.id}>
                                                <Card className="card-style1 h-100">
                                                    <Card.Body>
                                                        <div className="card-options">
                                                            <Dropdown align="end">
                                                                <Dropdown.Toggle variant="options"><MoreHorizOutlinedIcon /></Dropdown.Toggle>
                                                                <Dropdown.Menu className="card-options-submenu">
                                                                    <Dropdown.Item ><EditOutlinedIcon/> Edit</Dropdown.Item>
                                                                    <Dropdown.Item onClick={() => { deleteProject(project.id) }}><DeleteOutlineOutlinedIcon /> Delete</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <Card.Title> { project.name } </Card.Title>
                                                        <Card.Text className="mb-3">{project.description}</Card.Text>
                                                        {/* Members */}
                                                        <div className="team-member-group">
                                                            <span className="mt-1">Members :</span> 
                                                            {
                                                            project.users.slice(0,4).map((user,i) => (
                                                                <span className="team-member" key={user.id}>{ user.name[0] }</span>
                                                            ))}
                                                            <span className="team-member"><a href="#">+{ project.users.length < 4 ? '0' : project.users.length - 4 }</a></span> 
                                                        </div>
                                                        {/* Teams  */}
                                                        <div className="team-member-group">
                                                        <span className="mt-1">Teams :</span> 
                                                            {
                                                            project.teams.slice(0,4).map((team,i) => (
                                                                <span className="team-member" key={team.id}>{ team.name[0] }</span>
                                                            ))}
                                                            <span className="team-member"><a href="#">+{ project.teams.length < 4 ? '0' : project.teams.length - 4 }</a></span> 
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}                           
                                    </Row>
                                </Col>